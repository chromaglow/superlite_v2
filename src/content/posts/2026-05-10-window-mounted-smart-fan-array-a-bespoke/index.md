---
title: Window-Mounted Smart Fan Array // A Bespoke Climate Control Build
description: ''
pubDate: '2026-05-10T22:33:00.000Z'
datePosted: '2026-05-13'
author: Ezra
type: project
image:
  url: ./the_finished_fan_in_windo.webp
  alt: '91'
tags:
  - ai-error
  - check-logs
  - project
---

Window-Mounted Smart Fan Array // A Bespoke Climate Control Build

&nbsp;

I'm excited about this project I've been playing with for the last year. I just got done with the second iteration, and I'm pretty happy with it. I spend a lot of time in my workshop or laboratory, as I call it, and I also work in that space. This small room got really well organized, but there's still a lot of 3D printers, laser cutters, robots, just machines in there, and then lighting and computers create a lot of heat. I needed to figure out a way to keep this room a little bit cooler, and based on where the window is, it's out of the way and it's a slot sliding window. It needed to be quiet, since I work from home and I'm on a lot of Zoom calls.

&nbsp;

I got eight Thermaltake, 20 200 mm fans, a Raspberry Pi, a MOSFET that would control those eight fans over four channels, as well as a BME280 sensor for the Raspberry Pi so I could take ambient readings of barometric pressure, temperature, and humidity in the room constantly. I went through a couple of iterations. I learned a lot. The first version came out looking like a very rough prototype, but I did use it for the first summer. There was exposed wiring everywhere. I managed to figure out a lot of the challenges of getting the fans into a 3D printed framework.

&nbsp;

I designed all the pieces in SolidWorks. The outside rigid frame holds the fans and each piece dovetails together like a puzzle piece, and fit exactly in the 30 mm wide window track. Essentially, I wanted this to be like a slim, good-looking fan that fit into that window track. I got the prototype together. It worked okay. This year it started to get warm in the spring, and I wanted to rebuild it, so I decided to tackle some of the bigger challenges. I redesigned the frames to have all the hardware be on the back so you wouldn't see the screws that mount the fans. I also flush mounted rare earth magnets in front of the frames. I put two on each fan so that it created a sort of universal mounting system where anything that I wanted to add magnets to could go there. In this case, I made covers so I don't have to have all the fans open.

&nbsp;

Also, I don't have to lift this thing in and out of the window. It can stay there, and I just slap a magnetic cover over the fans that are not being used, and it seals the window. That was an upgrade. As well, I also moved the electronics to the bottom of the unit, and I made them enclosed and accessible, including adding some vents to one of the covers for the brains and whatnot. Since I  created  covers for the fans, I also then created a rack that goes up on the wall next to where the fan is. When I take the covers off, they rest neatly there and wait to be used, so convenient. 

&nbsp;

I'm a fan of the cassette futurism, vintage technology aesthetic. I styled the whole thing to look like it is hardware from the Wayland-Yutani Corporation from the movie franchise Alien. In addition to showing the 7 days for the temperature, humidity, and pressure, I also added a weather radar map on there with 7 different filters you can look at: wind, rain, clouds, temperature, isobars, etc. I also programmed it to zoom to various different cities that interest me. I love the hacker noir dash styling and I have complete control from any device with a web browser. 

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
    <figcaption>Fan cover rack</figcaption>
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
    <figcaption>Constructing the outer frame and checking tolerances</figcaption>
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
    <figcaption>Cleaned up electronics</figcaption>
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
