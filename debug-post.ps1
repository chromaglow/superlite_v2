# Superlite Autoblog - Post Debug Script
# Run this after publishing to verify everything is correct before pushing

$ErrorActionPreference = "Continue"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  SUPERLITE POST DEBUG CHECKER" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Get the latest post folder
$postsDir = "src\content\posts"
$publicPostsDir = "public\posts"

if (-not (Test-Path $postsDir)) {
    Write-Host "[ERROR] Posts directory not found: $postsDir" -ForegroundColor Red
    Write-Host "Make sure you're running this from the superlite_v2 folder" -ForegroundColor Yellow
    exit 1
}

$latestPost = Get-ChildItem $postsDir -Directory | Sort-Object LastWriteTime -Descending | Select-Object -First 1

if (-not $latestPost) {
    Write-Host "[ERROR] No posts found in $postsDir" -ForegroundColor Red
    exit 1
}

Write-Host "Latest Post: " -NoNewline
Write-Host $latestPost.Name -ForegroundColor Green

# ============================================
# CHECK 1: Files in content folder
# ============================================
Write-Host "`n--- CHECK 1: Content Folder Files ---" -ForegroundColor Yellow
$contentFiles = Get-ChildItem $latestPost.FullName
Write-Host "Files in $($latestPost.Name):"
foreach ($file in $contentFiles) {
    $size = "{0:N2} KB" -f ($file.Length / 1KB)
    Write-Host "  - $($file.Name) ($size)"
}

$hasIndex = $contentFiles | Where-Object { $_.Name -eq "index.md" }
$hasCover = $contentFiles | Where-Object { $_.Extension -match "\.(jpg|jpeg|png|webp|gif)$" }

if ($hasIndex) {
    Write-Host "[OK] index.md exists" -ForegroundColor Green
} else {
    Write-Host "[ERROR] index.md NOT FOUND" -ForegroundColor Red
}

if ($hasCover) {
    Write-Host "[OK] Cover image exists: $($hasCover.Name)" -ForegroundColor Green
} else {
    Write-Host "[ERROR] No cover image found" -ForegroundColor Red
}

# ============================================
# CHECK 2: Public folder files
# ============================================
Write-Host "`n--- CHECK 2: Public Folder Files ---" -ForegroundColor Yellow
$publicPostDir = Join-Path $publicPostsDir $latestPost.Name

if (Test-Path $publicPostDir) {
    $publicFiles = Get-ChildItem $publicPostDir
    Write-Host "Files in public/posts/$($latestPost.Name):"
    foreach ($file in $publicFiles) {
        $size = "{0:N2} KB" -f ($file.Length / 1KB)
        Write-Host "  - $($file.Name) ($size)"
    }
    Write-Host "[OK] Public folder exists with $($publicFiles.Count) file(s)" -ForegroundColor Green
} else {
    Write-Host "[WARNING] No public folder for this post" -ForegroundColor Yellow
    Write-Host "  Expected: $publicPostDir"
    Write-Host "  Gallery images may not load if post has multiple images"
}

# ============================================
# CHECK 3: Frontmatter validation
# ============================================
Write-Host "`n--- CHECK 3: Frontmatter Check ---" -ForegroundColor Yellow
$indexPath = Join-Path $latestPost.FullName "index.md"
$content = Get-Content $indexPath -Raw

# Extract frontmatter
if ($content -match "(?s)^---\r?\n(.+?)\r?\n---") {
    $frontmatter = $Matches[1]
    Write-Host "Frontmatter preview:"
    Write-Host ($frontmatter | Select-Object -First 15) -ForegroundColor Gray

    # Check image.url
    if ($frontmatter -match 'url:\s*[''"]?(\.\/[^''"]+)[''"]?') {
        $imageUrl = $Matches[1]
        Write-Host "`nFrontmatter image.url: " -NoNewline
        Write-Host $imageUrl -ForegroundColor Cyan

        # Check if that file exists
        $expectedFile = Join-Path $latestPost.FullName ($imageUrl -replace '^\.\/', '')
        if (Test-Path $expectedFile) {
            Write-Host "[OK] Referenced cover image exists" -ForegroundColor Green
        } else {
            Write-Host "[ERROR] Cover image NOT FOUND: $expectedFile" -ForegroundColor Red
        }

        # Check it's a relative path
        if ($imageUrl -match '^\.\/') {
            Write-Host "[OK] Using relative path (./)" -ForegroundColor Green
        } else {
            Write-Host "[ERROR] Should use relative path starting with ./" -ForegroundColor Red
        }
    } else {
        Write-Host "[ERROR] Could not find image.url in frontmatter" -ForegroundColor Red
    }
} else {
    Write-Host "[ERROR] Could not parse frontmatter" -ForegroundColor Red
}

# ============================================
# CHECK 4: Gallery image paths in markdown
# ============================================
Write-Host "`n--- CHECK 4: Gallery Image Paths ---" -ForegroundColor Yellow
$imgMatches = [regex]::Matches($content, 'src="([^"]+)"')

if ($imgMatches.Count -gt 0) {
    Write-Host "Found $($imgMatches.Count) image src attribute(s):"
    $allAbsolute = $true
    foreach ($match in $imgMatches) {
        $src = $match.Groups[1].Value
        Write-Host "  - $src" -NoNewline

        if ($src -match '^/superlite_v2/') {
            Write-Host " [OK]" -ForegroundColor Green
        } elseif ($src -match '^\.\/') {
            Write-Host " [ERROR - relative path won't work in gallery]" -ForegroundColor Red
            $allAbsolute = $false
        } else {
            Write-Host " [WARNING - unexpected format]" -ForegroundColor Yellow
            $allAbsolute = $false
        }
    }

    if ($allAbsolute) {
        Write-Host "[OK] All gallery images use absolute paths" -ForegroundColor Green
    }
} else {
    Write-Host "No <img> tags found in markdown body (might be cover-only post)"
}

# ============================================
# CHECK 5: Build test
# ============================================
Write-Host "`n--- CHECK 5: Build Test ---" -ForegroundColor Yellow
Write-Host "Running: npm run build"
Write-Host "(This may show warnings - look for errors)`n"

$buildResult = npm run build 2>&1
$buildExitCode = $LASTEXITCODE

if ($buildExitCode -eq 0) {
    Write-Host "`n[OK] Build succeeded" -ForegroundColor Green
} else {
    Write-Host "`n[ERROR] Build failed with exit code $buildExitCode" -ForegroundColor Red
    Write-Host "Build output:" -ForegroundColor Yellow
    Write-Host $buildResult
    exit 1
}

# ============================================
# CHECK 6: Verify URLs in built output
# ============================================
Write-Host "`n--- CHECK 6: Built URL Verification ---" -ForegroundColor Yellow
$distIndex = "dist\index.html"

if (Test-Path $distIndex) {
    $distContent = Get-Content $distIndex -Raw
    $hrefMatches = [regex]::Matches($distContent, 'href="([^"]*blog[^"]*)"')

    Write-Host "Blog URLs in dist/index.html:"
    $urlsOk = $true
    foreach ($match in $hrefMatches | Select-Object -First 5) {
        $href = $match.Groups[1].Value
        Write-Host "  - $href" -NoNewline

        if ($href -match '^/superlite_v2/blog/') {
            Write-Host " [OK]" -ForegroundColor Green
        } elseif ($href -match '/superlite_v2blog') {
            Write-Host " [ERROR - missing slash!]" -ForegroundColor Red
            $urlsOk = $false
        } else {
            Write-Host ""
        }
    }

    if ($urlsOk) {
        Write-Host "[OK] URLs are correctly formatted" -ForegroundColor Green
    } else {
        Write-Host "[ERROR] Found malformed URLs - check BASE_URL slash issue" -ForegroundColor Red
    }
} else {
    Write-Host "[ERROR] dist/index.html not found" -ForegroundColor Red
}

# ============================================
# CHECK 7: Git status
# ============================================
Write-Host "`n--- CHECK 7: Git Status ---" -ForegroundColor Yellow
$gitStatus = git status --porcelain 2>&1
$stagedFiles = git diff --cached --name-only 2>&1

Write-Host "Uncommitted changes:"
if ($gitStatus) {
    Write-Host $gitStatus -ForegroundColor Gray
} else {
    Write-Host "  (no changes)"
}

# ============================================
# SUMMARY
# ============================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  DEBUG CHECK COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "`nIf all checks passed, you're ready to commit and push!"
Write-Host "If any checks failed, fix the issues before pushing.`n"

Write-Host "Quick commands:" -ForegroundColor Yellow
Write-Host "  git add ." -ForegroundColor Gray
Write-Host "  git commit -m 'Add new post: $($latestPost.Name)'" -ForegroundColor Gray
Write-Host "  git push" -ForegroundColor Gray
