---
title: "Window-Mounted Smart Fan Array // A Bespoke Climate Control Build"
description: ""
pubDate: 2026-05-10T22:33:00.000Z
datePosted: '2026-05-13'
author: "Ezra"
type: "project"
image:
    url: "./the_finished_fan_in_windo.webp"
    alt: "91"
tags: ["ai-error", "check-logs", "project"]
---

Window-Mounted Smart Fan Array // A Bespoke Climate Control Build

&nbsp;

My home office is a dense cluster of machines, printers, and robots, and they all run hot. The window situation made a standard box fan impractical: wrong form factor for the track, awkward placement relative to the gear I'm constantly reaching for. So I did what any reasonable maker does. I designed something from scratch.
The hardware stack is straightforward: a Raspberry Pi as the brain, a MOSFET rated for the load, a BME280 for temperature/humidity/barometric pressure, and eight Thermaltake Pure 20 200mm server fans each moving 130 CFM. That's over 1,000 CFM of airflow in a window-profile footprint. The goal was quiet, high-volume, and slim enough to disappear into the track.

&nbsp;

The software side ended up being one of the more satisfying parts of the project. The Pi runs a self-hosted secure web server on my local network. I navigate to a URL, log in, and land on a custom dashboard with a hacker noir aesthetic. It surfaces live temperature, humidity, and pressure charts, a visual diagram of the fan array, and both automatic and manual control modes with configurable min/max temperature thresholds. It also pulls the NWS API for local hourly forecast and radar, so I'm looking at interior and exterior conditions in the same view.

&nbsp;

I went through two iterations. The first version worked but was honest about its prototype status: wiring visible, nothing pretty about the internals. The second version fixed all of that. The front face is completely clean with no visible hardware and no exposed wiring. The harness is fully internal. What you see from the front are two rare earth magnets, which serve as the attachment interface for airflow directors and magnetic covers. The Raspberry Pi and sensor enclosure sit at the bottom, with a dedicated vented cover on the sensor section to maintain accurate readings without obstructing flow.
I also designed a small wall-mounted rack specifically for storing the covers when they're not deployed. Pull them off the array, seat them in the rack, done. It keeps the system self-contained without needing a dedicated shelf or drawer.

&nbsp;

The build is modular by design. All components are built around a common attachment system, so the array could be scaled horizontally if I ever needed more coverage. It's also, because I have priorities, done in official Weyland-Yutani colorway with franchise branding throughout. If you're going to push 1,000 CFM of server fan airflow through your window, you might as well commit to the aesthetic.

## Reference Images

<div class="gallery-grid">
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/the_finished_fan_in_windo.webp" alt="91" />
    <figcaption>The finished fan in window</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/dashboard_interface_chart.webp" alt="dash1" />
    <figcaption>Dashboard interface charts humidity, temp and barometric pressure</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/dashboard_also_shows_loca.webp" alt="dash2" />
    <figcaption>Dashboard also shows local weather forecast, radar and actual vs forecast temp using national weather API</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/close_up_of_the_fan_contr.webp" alt="control close up" />
    <figcaption>Close up of the fan control diagram</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fitting_the__brain__cover.webp" alt="94" />
    <figcaption>Fitting the "brain" covers to the frame</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/brain_cover_design_for_se.webp" alt="brain2" />
    <figcaption>brain cover design for sensor housing has vents to enhance accuracy of readings</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/raspberry_pi_brain_cover.webp" alt="brain1" />
    <figcaption>Raspberry Pi brain cover</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fan_cover_rack_.webp" alt="93" />
    <figcaption>Fan cover rack </figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/wall_mounted_fan_cover_ra.webp" alt="92" />
    <figcaption>Wall mounted fan cover rack to hold the magnetic covers when then are in use</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fan_cover_design_2.webp" alt="cover2" />
    <figcaption>Fan cover design 2</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fan_cover_design_1.webp" alt="cover1" />
    <figcaption>Fan cover design 1</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/securing_the_fan_units_an.webp" alt="9" />
    <figcaption>Securing the fan units and building the wiring harness</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/constructing_the_outer_fr.webp" alt="8" />
    <figcaption>Constructing the outer frame and checking tolerances </figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/setting_anchor_magnets_in.webp" alt="7" />
    <figcaption>Setting anchor magnets in the frames</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/securing_dovetails_of_the.webp" alt="6" />
    <figcaption>Securing dovetails of the top and bottom frames</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/clean_final_frame_prints.webp" alt="5" />
    <figcaption>Clean final frame prints</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/support_removal.webp" alt="4" />
    <figcaption>Support removal</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/60_hour_print_of_the_fina.webp" alt="3" />
    <figcaption>60 hour print of the final frames on the H2D print bed</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/final_print_files_secures.webp" alt="2" />
    <figcaption>Final print files secures fans to frame in the back and only shows rare earth magnets on the front for an uncluttered appearance</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/final_prototype_functions.webp" alt="PXL_20250530_150029943" />
    <figcaption>Final prototype functions, time to refine the design and print finals</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/cleaned_up_electronics_.webp" alt="PXL_20250411_213246522" />
    <figcaption>Cleaned up electronics </figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/connecting_fan_mosfet_and.webp" alt="PXL_20250411_185856551" />
    <figcaption>Connecting fan MOSFET and BM280 sensor to the correct raspberry pi pins via a bread board to create more space</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/connecting_and_routing_po.webp" alt="PXL_20250409_231700418" />
    <figcaption>Connecting and routing power supply</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/first_power_test_is_a_suc.webp" alt="PXL_20250407_215335232" />
    <figcaption>First power test is a success</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/mosfet_channel_routing.webp" alt="PXL_20250409_223607501" />
    <figcaption>MOSFET channel routing</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fan_frame_fits_seamlessly.webp" alt="PXL_20250408_233752291" />
    <figcaption>Fan frame fits seamlessly in the window track</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/fan_fit_test_passed.webp" alt="PXL_20250407_212917374" />
    <figcaption>Fan fit test passed</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/prototype_frame_design_in.webp" alt="1" />
    <figcaption>Prototype frame design in Solidworks</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/hardware_eval_and_measure.webp" alt="PXL_20250406_111451318" />
    <figcaption>Hardware eval and measurement</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/starting_with_a_pile_of_h.webp" alt="PXL_20250406_111425846" />
    <figcaption>Starting with a pile of hardware</figcaption>
  </figure>
  <figure>
    <img src="/superlite_v2/posts/2026-05-10-window-mounted-smart-fan-array-a-bespoke/the_original_idea_sketch.webp" alt="PXL_20250406_013104465" />
    <figcaption>The original idea sketch</figcaption>
  </figure>
</div>
