const nadeData = {
    maps: ['mirage', 'inferno', 'ancient', 'overpass', 'nuke', 'vertigo', 'anubis', 'train'],
    types: [
        { id: 'flash', label: 'Flash' },
        { id: 'smoke', label: 'Smoke' },
        { id: 'molotov', label: 'Molotov' },
        { id: 'he', label: 'HE' }
    ],

    nades: [
        {
            id: '1',
            title: 'Window Smoke',
            map: 'mirage',
            type: 'smoke',
            difficulty: 'hard',
            side: 'T',
            description: 'Perfect smoke to block window',
            imageUrl: 'img/mirage/window.png',
            videoUrl: 'https://www.youtube.com/watch?v=tXU64vhW6fU', // Ajout du lien YouTube
            position: {
                from: 'T spawn',
                to: 'Window'
            },
            technique: 'jump-throw',
            tags: ['mid execute', 'mid control']
        },
        {
            id: '2',
            title: 'CT smoke A',
            map: 'mirage',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Perfect smoke for A site',
            imageUrl: 'img/mirage/ct_smoke.jpg',
            videoUrl: 'https://youtu.be/pPfUEq-1MDk',
            position: {
                from: 'T spawn',
                to: 'CT spawn'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '3',
            title: 'T smoke for B site',
            map: 'inferno',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Perfect smoke for exec B site',
            imageUrl: 'img/inferno/banane.jpg',
            videoUrl: 'https://youtu.be/Kflwu8Iffw0',
            position: {
                from: 'Banana',
                to: 'CT'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '4',
            title: 'Vent smoke for B site',
            map: 'vertigo',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for B site',
            imageUrl: 'img/vertigo/vent_vertigo.jpg',
            videoUrl: 'https://youtu.be/1ksz79f9LXQ',
            position: {
                from: 'T spawn',
                to: 'Vent'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'entry']
        },
        {
            id: '5',
            title: 'Red room smoke for mid',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for rush mid',
            imageUrl: 'img/ancient/red_room.jpg',
            videoUrl: 'https://youtu.be/rxjTVSBVe_4',
            position: {
                from: 'T spawn',
                to: 'Red room'
            },
            technique: 'jump-throw',
            tags: ['a execute', 'mid']
        },
        {
            id: '6',
            title: 'Smoke main for A',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'CT',
            description: 'Perfect smoke for fix A',
            imageUrl: 'img/ancient/A_main.jpg',
            videoUrl: 'https://youtu.be/9ibK_eT8sFU',
            position: {
                from: 'CT spawn',
                to: 'A main'
            },
            technique: 'jump-throw',
            tags: ['fixe', 'A']
        },
        {
            id: '7',
            title: 'Smoke for ct lane',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for rush A',
            imageUrl: 'img/ancient/CT_lane.jpg',
            videoUrl: 'https://youtu.be/eMXh-7v3Nag',
            position: {
                from: 'Smoker',
                to: 'CT lane'
            },
            technique: 'crouch + jump-throw',
            tags: ['rush', 'A']
        },

        {
            id: '8',
            title: 'Smoke mid',
            map: 'anubis',
            type: 'smoke',
            difficulty: 'easy',
            side: 'T',
            description: 'Perfect smoke for rush mid',
            imageUrl: 'img/anubis/mid_anubis.jpg',
            videoUrl: 'https://youtu.be/3pVQFpoftmw',
            position: {
                from: 'T spawn',
                to: 'mid'
            },
            technique: 'jump-throw',
            tags: ['rush', 'mid']
        },
        {
            id: '9',
            title: 'Molotov mid',
            map: 'anubis',
            type: 'molotov',
            difficulty: 'medium',
            side: 'CT',
            description: 'Perfect smoke for bloc rush mid',
            imageUrl: 'img/anubis/molo_mid.jpg',
            videoUrl: 'https://youtu.be/Is6L1H7EbDc',
            position: {
                from: 'A',
                to: 'water'
            },
            technique: 'jump-throw',
            tags: ['fix', 'mid']
        },
        {
            id: '10',
            title: 'HE mid anubis',
            map: 'anubis',
            type: 'he',
            difficulty: 'medium',
            side: 'CT',
            description: 'Perfect HE mid',
            imageUrl: 'img/anubis/HE_cs2.webp',
            videoUrl: 'https://youtu.be/yuFJB-lOxSg',
            position: {
                from: 'A',
                to: 'water'
            },
            technique: 'jump-throw + forward',
            tags: ['fix', 'mid']
        },
        {
            id: '11',
            title: 'Smoke short',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for short site B',
            imageUrl: 'img/ancient/smoke_short.jpg',
            videoUrl: 'https://youtu.be/xwryP6JKyC4',
            position: {
                from: 'Ruins',
                to: 'Short'
            },
            technique: 'jump-throw',
            tags: ['exec', 'B']
        },
        {
            id: '12',
            title: 'Smoke long',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for long site B',
            imageUrl: 'img/ancient/smoke_long.jpg',
            videoUrl: 'https://youtu.be/t8nVBmTTP90',
            position: {
                from: 'Ruins',
                to: 'long'
            },
            technique: 'jump-throw',
            tags: ['exec', 'B']
        },
        {
            id: '13',
            title: 'Flash mid',
            map: 'vertigo',
            type: 'flash',
            difficulty: 'medium',
            side: 'CT',
            description: 'Perfect flash for control mid',
            imageUrl: 'img/vertigo/vertigo.webp',
            videoUrl: 'https://youtu.be/a0nVTApUBRU',
            position: {
                from: 'CT spawn',
                to: 'mid'
            },
            technique: 'jump-throw + right clic',
            tags: ['control', 'mid']
        },
        {
            id: '14',
            title: 'Smoke mid',
            map: 'ancient',
            type: 'smoke',
            difficulty: 'hard',
            side: 'CT',
            description: 'Perfect smoke for control mid',
            imageUrl: 'img/ancient/mid_ancient.jpg',
            videoUrl: 'https://youtu.be/DSCJPxKxO7Q',
            position: {
                from: 'CT spawn',
                to: 'mid'
            },
            technique: 'jump-throw + d',
            tags: ['control', 'mid']
        },


        {
            id: '15',
            title: 'Smoke main',
            map: 'nuke',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for control outside',
            imageUrl: 'img/nuke/main.jpg',
            videoUrl: 'https://youtu.be/sJrf80vgUZA',
            position: {
                from: 'T spawn',
                to: 'main'
            },
            technique: 'jump-throw',
            tags: ['control', 'mid', 'exec']
        },
        {
            id: '16',
            title: 'Smoke garage',
            map: 'nuke',
            type: 'smoke',
            difficulty: 'medium',
            side: 'T',
            description: 'Perfect smoke for control outside',
            imageUrl: 'img/nuke/garage.jpg',
            videoUrl: 'https://youtu.be/agj_qrQKyuU',
            position: {
                from: 'T spawn',
                to: 'garage'
            },
            technique: 'jump-throw',
            tags: ['control', 'mid', 'exec']
        },

        
    ]
};
