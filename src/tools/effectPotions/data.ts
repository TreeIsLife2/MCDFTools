export const effects = {
    "absorption": {
        "effect": "Absorption",
        "listlevels": [ 1, 2, 4 ],
        "levels": [
            {
                "level": 1,
                "duration": 120,
                "obtain": "Golden Apple",
                "trigger": "Eaten" 
            },
            {
                "level": 2,
                "duration": 5,
                "obtain": "Totem of Undying",
                "trigger": "Activated"
            },
            {
                "level": 4,
                "duration": 120,
                "obtain": "Enchanted Golden Apple",
                "trigger": "Eaten"
            },
        ]
    },
    "conduit": {
        "effect": "Conduit Power",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 13,
                "obtain": "Activated Conduit",
                "trigger": "In Range"
            },
        ]
    },
    "dolphingrace": {
        "effect": "Dolphin's Grace",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 5,
                "obtain": "Dolphin",
                "trigger": "Swimming in Range"
            },
        ]
    },
    "glowing":{
        "effect": "Glowing",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 10,
                "obtain": "Spectral Arrow",
                "trigger": "Damaged by"
            },
        ]
    },
    "haste": {
        "effect": "Haste",
        "listlevels": [ 1, 2 ],
        "levels": [
            {
                "level": 1,
                "duration": 5,
                "obtain": "Activated Beacon",
                "trigger": "In Range"
            },
            {
                "level": 2,
                "duration": 17,
                "obtain": "Activated Beacon",
                "trigger": "In Range"
            },
        ]
    },
    "villhero": {
        "effect": "Hero of the Village",
        "listlevels": [ 'all' ],
        "levels": [
            {
                "level": 'all',
                "duration": 2400,
                "obtain": "Completed Raid",
                "trigger": "Killed at Least 1 Raider"
            },
        ]
    },
    "resistance": {
        "effect": "Resistance",
        "listlevels": [ 1, 2, 3, 4 ],
        "levels": [
            {
                "level": 1,
                "duration": 5,
                "obtain": "Activated Beacon",
                "trigger": "In Range"
            },
            {
                "level": 1,
                "duration": 300,
                "obtain": "Enchanted Golden Apple",
                "trigger": "Eaten"
            },
            {
                "level": 2,
                "duration": 17,
                "obtain": "Activated Beacon",
                "trigger": "In Range"
            },
            {
                "level": 3,
                "duration": 2,
                "obtain": "Arrow of The Turtle Master",
                "trigger": "Damaged by"
            },
            {
                "level": 3,
                "duration": 5,
                "obtain": "Arrow of The Turtle Master (Extended)",
                "trigger": "Damaged by"
            },
            {
                "level": 3,
                "duration": 5,
                "obtain": "Lingering Potion of The Turtle Master",
                "trigger": "Used"
            },
            {
                "level": 3,
                "duration": 10,
                "obtain": "Lingering Potion of The Turtle Master (Extended)",
                "trigger": "Used"
            },
            {
                "level": 3,
                "duration": 20,
                "obtain": "Potion of The Turtle Master",
                "trigger": "Used"
            },
            {
                "level": 3,
                "duration": 20,
                "obtain": "Splash Potion of The Turtle Master",
                "trigger": "Drank"
            },
            {
                "level": 3,
                "duration": 40,
                "obtain": "Potion of The Turtle Master (Extended)",
                "trigger": "Used"
            },
            {
                "level": 3,
                "duration": 40,
                "obtain": "Splash Potion of The Turtle Master (Extended)",
                "trigger": "Drank"
            },
            {
                "level": 4,
                "duration": 2,
                "obtain": "Arrow of The Turtle Master 2",
                "trigger": "Damaged by"
            },
            {
                "level": 4,
                "duration": 5,
                "obtain": "Lingering Potion of The Turtle Master 2",
                "trigger": "Used"
            },
            {
                "level": 4,
                "duration": 20,
                "obtain": "Potion of The Turtle Master 2",
                "trigger": "Used"
            }
        ]
    },
    "saturation": {
        "effect": "Saturation",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 35,
                "obtain": "Crafted Suspicious Stew",
                "trigger": "Drank"
            },
        ]
    },
    "badomen": {
        "effect": "Bad Omen",
        "listlevels": [ 'all' ],
        "levels": [
            {
                "level": 'all',
                "duration": 6000,
                "obtain": "Raid Captain",
                "trigger": "Killed"
            },
        ]
    },
    "blindness": {
        "effect": "Blindness",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 20,
                "obtain": "Illusioner",
                "trigger": "Killed"
            },
            {
                "level": 1,
                "duration": 8,
                "obtain": "Crafted Suspicious Stew",
                "trigger": "Drank"
            },
            {
                "level": 1,
                "durationMin": 5,
                "durationMax": 7,
                "obtain": "Looted/Traded Suspicious Stew",
                "trigger": "Drank",
            },
        ]
    },
    "darkness": {
        "effect": "Darkness",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 13,
                "obtain": "Activated Natural Sculk Shrieker",
                "trigger": "In Range"
            },
            {
                "level": 1,
                "duration": 13,
                "obtain": "Warden",
                "trigger": "In Range & Every 6 Seconds"
            },
        ]
    },
    "hunger": {
        "effect": "Hunger",
        "listlevels": [ 1, 3 ],
        "levels": [
            {
                "level": 1,
                "duration": 30,
                "obtain": "Raw Chicken",
                "trigger": "30% Chance When Eaten"
            },
            {
                "level": 1,
                "duration": 30,
                "obtain": "Rotten Flesh",
                "trigger": "80% Chance When Eaten"
            },
            {
                "level": 1,
                "duration": 0,
                "obtain": "Husk",
                "trigger": "Damaged by"
            },
            {
                "level": 3,
                "duration": 15,
                "obtain": "Pufferfish",
                "trigger": "Eaten"
            },
        ],
    },
    "fatigue": {
        "effect": "Mining Fatigue",
        "listlevels": [ 3 ],
        "levels": [
            {
                "level": 3,
                "duration": 300,
                "obtain": "Elder Guardian",
                "trigger": "In Range & Effect Not Applied"
            },
        ]
    },
    "nausea": {
        "effect": "Nausea",
        "listlevels": [ 1 ],
        "levels": [
            {
                "level": 1,
                "duration": 15,
                "obtain": "Pufferfish",
                "trigger": "Eaten"
            },
        ]
    },
    "wither": {
        "effect": "Wither",
        "listlevels": [ 1, 2 ],
        "levels": [
            {
                "level": 1,
                "duration": 2,
                "obtain": "Wither Rose",
                "trigger": "Standing on Wither Rose"
            },
            {
                "level": 1,
                "duration": 8,
                "obtain": "Crafted Suspicious Stew",
                "trigger": "Drank"
            },
            {
                "level": 1,
                "duration": 10,
                "obtain": "Wither Skeleton",
                "trigger": "Damaged by"
            },
            {
                "level": 2,
                "duration": 10,
                "obtain": "Wither Skull",
                "trigger": "Damaged By"
            },
            {
                "level": 2,
                "duration": 40,
                "obtain": "Wither Skull",
                "trigger": "Damaged By"
            },
        ]
    }
};