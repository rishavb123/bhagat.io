// TODO: move this stuff over to mongo db
let tech = {
    computers: [
        {
            name: "Yoga C940 15\" - Iron Grey",
            type: "Laptop",
            link: "https://www.lenovo.com/us/en/laptops/yoga/yoga-2-in-1-series/Lenovo-Yoga-C940-15IRH/p/88YGC901298",
            color: "Iron Grey",
            specs: {
                cpu: "9th Gen Intel Core i9 9880H Processor",
                screen: "15.6 \" UHD (4K) glossy touchscreen",
                ram: "16 GB DDR4 2666 MHz",
                storage: "2 TB PCIe SSD",
                graphics: "NVIDIA GeForce GTX 1650 Max Q with 4 GB VRAM",
                webcam: "720p HD",
                os: "Windows 10 Home",
                ports: "2 USB C ports, Aux Port, Charging Port, USB A port",
                other: ["fingerprint reader", "backlit keyboard", "Lenovo Active Pen (garaged)", "Bluetooth 5.0", "WiFi"]
            }
        },
        {
            name: "Raspberry Pi 3",
            type: "Raspberry Pi",
            link: "https://www.amazon.com/gp/product/B01C6Q2GSY/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "green (black case)",
            specs: {
                cpu: "Model B Quad-Core 1.2 GHz",
                screen: "NA",
                ram: "1 GB RAM",
                storage: "32 GB micro SD card",
                graphics: "NA",
                webcam: "4k Raspberry Pi Camera Module",
                os: "Raspbian",
                ports: "4 USB ports, HDMI port, Aux Port, Micro USB power port, Ethernet Port",
                other: ["Bluetooth", "WiFi"]
            }
        }
    ],
    displays: [
        {
            name: "Acer Nitro VG280K",
            type: "Monitor",
            link: "https://www.amazon.com/Acer-VG280K-bmiipx-FreeSync-Technology/dp/B08VD89JMF/ref=sr_1_3?crid=2TYV301LL9WBJ&dchild=1&keywords=Acer+Nitro+28%22+Class+UHD+IPS+Gaming+Monitor&qid=1618775721&sprefix=usb+hub%2Caps%2C167&sr=8-3",
            color: "black",
            label: "Primary Display",
            specs: {
                resolution: "(4k UHD) 3840x2160",
                refresh_rate: "60Hz",
                size: "28\"",
                aspect_ratio: "16:9",
                contrast_ratio: "1000:1",
                response_time: "4ms",
                color_supported: "1.07 billion",
                adaptive_contrast_management: "100000000:1",
                brightness: "300cd/m^2",
                backlight: "LED",
                viewing_angles: "178deg",
                panel: "IPS",
                speakers: "2x2 W",
                ports: "1 display port and 2 HDMI",
                tearing_prevention: "AMD FreeSync",
                vesa_compatible: "100x100mm",
                dim: "25.08\" x 14.61\" x 2.68\"",
                other: ["HDR10", "stand"]
            }
        },
        {
            name: "ViewSonic VA2323wm",
            type: "Monitor",
            link: "https://www.amazon.com/ViewSonic-VA2323wm-23-Inch-16-Digital/dp/B002R0JJYE/ref=cm_cr_arp_d_product_top?ie=UTF8",
            color: "black",
            label: "Secondary Display",
            specs: {
                resolution: "(Full HD) 1920x1080",
                refresh_rate: "60Hz",
                size: "23\"",
                aspect_ratio: "16:9",
                contrast_ratio: "1000:1",
                adaptive_contrast_management: "20000:1",
                other: ["stand"]
            }
        },
        {
            name: "AOC e1659Fwu",
            type: "Monitor",
            link: "https://www.amazon.com/gp/product/B00CMKOVMO/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            label: "Quaternary Display",
            specs: {
                resolution: "1266x768",
                refresh_rate: "60Hz",
                size: "15.6\"",
                aspect_ratio: "16:9",
                other: ["usb powered", "portable", "kick stand"]
            }
        },
        {
            name: "Sceptre C355W-3440UN",
            type: "Monitor",
            link: "https://www.amazon.com/gp/product/B0812DKDD9/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1",
            color: "black & red",
            label: "Home (NJ) Display",
            specs: {
                resolution: "3440x1440",
                refresh_rate: "100Hz",
                size: "35\"",
                aspect_ratio: "21:9",
                tearing_prevention: "AMD FreeSync",
                vesa_compatible: "100x100mm",
                panel: "IPS",
                ports: "1 display port and 2 HDMI",
                other: ["stand", "curved"]
            }
        }
    ],
    peripherals: [
        {
            name: "Logitech MX Master 3 Wireless Laser Mouse",
            model_num: "910-005647",
            type: "Mouse",
            link: "https://www.bestbuy.com/site/logitech-mx-master-3-wireless-laser-mouse-black/6366554.p?skuId=6366554",
            color: "black",
            label: "Productivity Mouse",
            specs: {
                lighting: "NA",
                max_sensitivity: "4000 dots per inch (dpi)",
                min_sensitivity: "200 dots per inch (dpi)",
                num_of_buttons: 7,
                wireless: true,
                tracking: "laser",
                num_of_side_buttons: 2,
                connectivity: "bluetooth or USB",
                dim: "3.3in x 2in",
                software: true,
                other: ["usb c charger"]
            }
        },
        {
            name: "Logitech G502 HERO Optical Gaming Mouse",
            model_num: "910-005469",
            type: "Mouse",
            link: "https://www.bestbuy.com/site/logitech-g502-hero-wired-optical-gaming-mouse-with-rgb-lighting-black/6265133.p?skuId=6265133",
            color: "black",
            label: "Gaming Mouse",
            specs: {
                lighting: "RGB",
                max_sensitivity: "25600 dots per inch (dpi)",
                min_sensitivity: "200 dots per inch (dpi)",
                num_of_buttons: 11,
                wireless: false,
                tracking: "optical",
                num_of_side_buttons: 4,
                connectivity: "wired USB",
                dim: "5.2in x 2.95in",
                software: true
            }
        },
        {
            name: "Redragon K556 Gaming Keyboard",
            type: "Keyboard",
            link: "https://www.amazon.com/gp/product/B01NAI2TXC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
            color: "black",
            label: "Primary Keyboard",
            specs: {
                wireless: false,
                connectivity: "wired USB",
                num_of_buttons: 104,
                numpad: true,
                mechanical: true,
                key_switches: "Brown Switches",
                lighting: "RGB",
                software: true,
                dim: "17.1in x 4.88in x 1.59",
                other: ["kickstand the angle keyboard"]
            }
        },
        {
            name: "Rii RK100 Keyboard",
            type: "Keyboard",
            link: "https://www.amazon.com/gp/product/B01LVZU9B0/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            label: "Secondary Keyboard",
            specs: {
                wireless: false,
                connectivity: "wired USB (2.0 works for this)",
                num_of_buttons: "104",
                numpad: true,
                mechanical: false,
                key_switches: "membrane",
                lighting: "3 Color LED (Red, Blue, Purple)",
                software: false,
                dim: "17.1in x 5.1in x 0.9in",
                other: ["kickstand the angle keyboard"]
            }
        },
        {
            name: "Logitech Keyboard Wireless MX 3200 w/ C-UAL52 Receiver & Wireless Mouse M-RAZ105",
            type: "Mouse + Keyboard Combo",
            link: "https://www.ebay.com/itm/Logitech-Keyboard-Wireless-MX-3200-w-C-UAL52-Receiver-Wireless-Mouse-M-RAZ105/254898058634?epid=1800241022&hash=item3b591bb58a:g:d-oAAOSw0sxgSAHS",
            color: "black",
            label: "Left Side Mouse and Backup Keyboard",
            specs: {
                wireless: true,
                connectivity: "USB",
                max_sensitivity: "3200 dots per inch (dpi)",
                num_of_buttons: "6 (for mouse)"
            }
        }
    ],
    audio: [
        {
            name: "Fifine Metal Condenser Recording Microphone - K669B",
            type: "Microphone",
            link: "https://www.amazon.com/gp/product/B06XCKGLTP/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                wireless: false,
                connectivity: "wired USB",
                stereo: false,
                other: ["stand", "windscreen", "volume knob"]
            }
        },
        {
            name: "Logitech Z337 Bold Sound Bluetooth Wireless 2.1 Speaker System",
            type: "Speakers",
            link: "https://www.amazon.com/gp/product/B01M0FZU8T/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                wireless: true,
                connectivity: "bluetooth or Aux Cable",
                stereo: true,
                power: "80W",
                subwoofer: true,
                other: ["separate volume knob", "aux out"]
            }
        },
        {
            name: "Anker Soundcore Life Q20 Hybrid Active Noise Cancelling Headphones",
            type: "Headphones",
            link: "https://www.amazon.com/gp/product/B07NM3RSRQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                wireless: true,
                mic: true,
                connectivity: "bluetooth or Aux Cable",
                stereo: true,
                noise_cancelling: true,
                form_factor: "Over Ear",
                other: ["aux cable", "pause, play, volume controls"]
            }
        },
        {
            name: "Raycon E55 Performer Earbuds",
            type: "Earbuds",
            link: "https://rayconglobal.com/products/e55-true-wireless-earbuds?variant=29457529077783",
            color: "black",
            specs: {
                stereo: true,
                mic: true,
                other: ["Wireless Charging"]
            }
        }
    ],
    stands: [
        {
            name: "HUANUO Monitor Stand Riser with Vented Metal",
            type: "Monitor Riser",
            link: "https://www.amazon.com/gp/product/B073VKC134/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            label: "Primary Monitor Riser",
            specs: {
                dim: "14.5 x 9.2 x 3.8 (L x W x H) inch "
            }
        },
        {
            name: "SONGMICS Bamboo 2-Tier Monitor Stand Riser ULLD213",
            type: "Monitor Riser",
            link: "https://www.amazon.com/gp/product/B071H6SD1Z/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "light brown",
            label: "Secondary Monitor Riser",
            specs: {
                dim: "24.64 x 10.98 x 6.3 inches"
            }
        },
        {
            name: "WALI Free Standing Dual LCD Monitor Fully Adjustable Desk Mount",
            type: "Monitor Arms",
            link: "https://www.amazon.com/gp/product/B07LFLWGRD/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                vesa_compatible: true
            }
        },
        {
            name: "AICHESON Full RGB Lights Laptop Cooling Cooler Pad",
            type: "External Laptop Fan",
            link: "https://www.amazon.com/gp/product/B0838GWZP7/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                lighting: "RGB",
                software: false,
                other: ["fan speed buttons", "lighting mode button"]
            }
        },
        {
            name: "RGB Headphone Stand with USB Hub KAFRI Desk Gaming Headset Holder Hanger Rack",
            type: "Headphone Hanger",
            link: "https://www.amazon.com/gp/product/B07W7QGCQQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                lighting: "RGB",
                software: false,
                other: ["usb port", "lighting mode button"]
            }
        }
    ],
    utility: [
        {
            name: "Gosund Smart Power Strip",
            type: "Smart Power Strip",
            link: "https://www.amazon.com/gp/product/B07P65GJS1/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "white",
            specs: {
                app: true,
                connectivity: "wifi",
                dim: "3.82 x 3.82 x 0.98 inches"
            }
        },
        {
            name: "Vebach Wireless Charger, Metal Frame Qi Certified Fast Wireless Charging Pad",
            type: "Wireless Charger",
            link: "https://www.amazon.com/gp/product/B07F9RBSP5/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "white",
            specs: {
                power: "micro USB powered"
            }
        },
        {
            name: "INIU Portable Charger, USB C Slimmest & Lightest Triple 3A High-Speed 10000mAh Power Bank",
            type: "Portable Charger",
            link: "https://www.amazon.com/gp/product/B07CZDXDG8/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                ports: "2 USB ports",
                power: "micro USB charging",
                other: ["flashlight"]
            }
        },
        {
            name: "TW Lighting IVY-40WT The IVY LED Desk Lamp",
            type: "Lamp",
            link: "https://www.amazon.com/gp/product/B013REF5VE/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "white",
            specs: {
                ports: "1 USB port",
                power: "AC power outlet",
                brightness_levels: 3
            }
        }
    ],
    comfort: [
        {
            name: "Aelfox Keyboard Wrist Rest & Mouse Pad Wrist Support",
            type: "Wrist Rests",
            link: "https://www.amazon.com/gp/product/B07FM92XL4/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                dim: "Keyboard: 17.32 x 2.76 x 0.98 inch/44 x 7 x 2.5 cm and Mouse: 5.31 x 2.76 x 0.75 inch/13.5 x 7 x 1.9 cm",
                other: ["non-slip base"]
            }
        },
        {
            name: "Cmhoo XXXL Gaming Mouse Pad RGB Keyboard Pad Large Glowing Led",
            type: "Mouse Pad",
            link: "https://www.amazon.com/gp/product/B07VXC826G/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "image",
            specs: {
                lighting: "RGB",
                software: false,
                dim: "35.4x15.7IN 3MM"
            }
        },
        {
            name: "HOKEKI Seat Cushion Memory Foam Coccyx Cushion Designed for Back",
            type: "Seat Cushion",
            link: "https://www.amazon.com/gp/product/B07X87P5JR/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {}
        },
        {
            name: "OPOLAR Extra-Quiet Clip on Stroller Fan, Rechargeable 2200mAh Battery Operated",
            type: "Mini Fan",
            link: "https://www.amazon.com/gp/product/B0734S54PB/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                num_of_speeds: 4,
                power: "Micro USB or Battery (Micro USB Charging)",
                rotation: "360deg",
                mount: "mount or stand"
            }
        }
    ],
    io_hubs: [
        {
            name: "Sabrent 10-Port 60W USB 3.0 Hub",
            type: "USB Hub",
            label: "10-Port USB Hub",
            link: "https://www.amazon.com/gp/product/B0797NZFYP/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                num_ports: 10,
                num_usb_3_ports: 10,
                powered: true,
                other: ["usb only", "individual switches"]
            }
        },
        {
            name: "Anker 4-Port USB 3.0 Ultra Slim Data Hub",
            type: "USB Hub",
            label: "4-Port USB Hub",
            link: "https://www.amazon.com/gp/product/B00XMD7KPU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                num_ports: 4,
                num_usb_3_ports: 4,
                powered: false,
                other: ["usb only"]
            }
        },
        {
            name: "Falwedi USB C Hub",
            type: "USB C Hub",
            label: "9-Port USB C Hub",
            color: "silver",
            link: "https://www.amazon.com/gp/product/B00XMD7KPU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            specs: {
                num_ports: 9,
                num_usb_3_ports: 3,
                num_usb_c_ports: 2,
                num_ethernet_ports: 1,
                num_sd_slots: 1,
                num_micro_sd_slots: 1,
                num_hdmi_ports: 1,
                powered: false,
                other: ["4K @ 30Hz HDMI"]
            }
        }
    ],
    other_devices: [
        {
            name: "AUKEY FHD Webcam",
            type: "Webcam",
            link: "https://www.amazon.com/gp/product/B072MMH33F/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            model_num: "PC-LM1E",
            color: "black",
            specs: {
                fps: 30,
                resolution: "1920x1080",
                connectivity: "USB",
                microphone: true,
                dim: "4.09 x 1.18 x 1.97 inches"
            }
        },
        {
            name: "Huion H610 Pro V2 Graphic Drawing Tablet",
            type: "Graphics Tablet",
            link: "https://www.amazon.com/gp/product/B07DPC98DT/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
            color: "black",
            specs: {
                pen_pressure: 8192,
                num_of_buttons: 8,
                dim: "13.89 x 9.64 x 0.55 inches",
            }
        }
    ]
}

for (let key in tech) {
    for (let obj of tech[key]) {
        if (!obj.label)
            obj.label = obj.type;
    }
}
