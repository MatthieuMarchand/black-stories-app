class Card {
    constructor(title, id, question, imgQuestion, descriptionImgQuestion, hints, solution, imgSolution, descriptionImgSolution) {
        this.title = title;
        this.id = id;
        this.question = question;
        this.imgQuestion = imgQuestion;
        this.descriptionImgQuestion = descriptionImgQuestion;
        this.hints = hints;
        this.solution = solution;
        this.imgSolution = imgSolution;
        this.descriptionImgSolution = descriptionImgSolution;
    }
}

const cardDatabase = [
    new Card(
        "The Poisoned Chalice",
        "1",
        "A renowned scientist is found dead in his laboratory, clutching an empty chalice. The room shows no signs of forced entry, and all doors were locked from the inside. How did he die?",
        "/images/chalice.png",
        "chalice",
        ["Deadly poison in the chalice.", "Late-night experiment with toxic substances.", "Faulty ventilation caused deadly fumes."],
        "The scientist mixed lethal chemicals in the chalice during his late-night experiment. The faulty ventilation system filled the room with deadly fumes, causing his tragic death.",
        "/images/laboratoire.png",
        "laboratoire"
    ),
    new Card(
        "The Vanishing Act",
        "2",
        "A famous magician performs 'The Vanishing Act' in front of a live audience. As the smoke clears, he disappears without a trace. How did he vanish?",
        "/images/magician-hat.png",
        "magician hat",
        ["Hat and wand left on stage.", "Financial troubles and risk of bankruptcy.", "Escape through secret workshop passage."],
        "Overwhelmed by financial troubles, the magician planned an escape. He vanished through a secret passage in his workshop while the audience was distracted by smoke, leaving his hat and wand as part of the illusion.",
        "/images/light.png",
        "light"
    ),
    new Card(
        "The Unseen Sniper",
        "3",
        "A politician is shot dead during a speech at a heavily secured event. The sniper escapes without a trace. How was the assassination executed?",
        "/images/sniper.png",
        "sniper",
        ["Unique alloy bullet.", "Cryptic message with political motive.", "High vantage point disguised as a construction worker."],
        "The sniper, disguised as a construction worker, used a unique alloy bullet to kill the politician. The cryptic message was a distraction, and the shot came from a high vantage point.",
        "/images/politician.png",
        "politician"
    ),
    new Card(
        "The Silent Symphony",
        "4",
        "A world-renowned conductor is found dead on stage before his performance. No murder weapon, and everyone heard nothing. How did the conductor die?",
        "/images/conductor.webp",
        "conductor",
        ["Missing baton.", "Traces of deadly poison on clothing.", "Greeting someone backstage before the performance."],
        "The conductor was poisoned before performing. During the performance, he noticed the missing baton and went backstage, where the poison took effect, causing his silent death.",
        "/images/poison.png",
        "poison"
    ),
    new Card(
        "The Missing Heirloom",
        "5",
        "An heirloom disappears from a locked display case at a family gathering. No signs of tampering, and only family had access. How was it stolen?",
        "/images/coffre-fort.png",
        "coffre fort",
        ["Traces of a powdery substance.", "Nervous cousin with sleight-of-hand skills.", "Old photograph showing the heirloom before it vanished."],
        "The cousin used powder to see fingerprints, performed sleight-of-hand tricks to lift fingerprints, and made a replica key to unlock the display case. He swapped the original heirloom with a duplicate.",
        "/images/magician-illusionist.png",
        "magician"
    ),
    new Card(
        "The Haunted Manor",
        "6",
        "Friends spend the night in a haunted manor as a dare. One is found dead, terrified. Doors locked from inside, no one else seen. How did this person die?",
        "/images/haunted-house.png",
        "haunted house",
        ["Victim's frozen face in terror.", "Eerie sounds and temperature drop.", "Hidden passage to secret underground room."],
        "The victim was murdered by one of the friends who used the haunted legend to distract. The murderer accessed the victim's room through the hidden passage, creating an illusion of haunting to cause a fatal fright.",
        "/images/people.webp",
        "people"
    )
];