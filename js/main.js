// WATS 3020 Mad Libs Assignment

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).','Ms.');
let authorName = prompt('What is your full name?','Lionel');
let adjective1 = prompt('Give me a descriptive term','beuatiful');
let vehicle = prompt('Give me vehicle name','bicycle');
let vehiclePart = prompt('Provide vehicle part','wheel');
let parking = prompt('Provide a place to park','place behind the dumpster');
let precious = prompt('Provide a precious object','smart phone');
let noiseMaker = prompt('Provide noise maker','horn');
let crowdBehavior = prompt('Provide something people do in a crowd','cheer');
let adjective2 = prompt('Provide adjective','lovely');
let adjective3 = prompt('Provide adjective','horrid');
let color = prompt('Provide color','goldenrod');
let familyMember = prompt('Provide male family member','great uncle');
let organ = prompt('Provide body organ','liver');
let bodyPart1 = prompt('Provide a body part','arm');
let bodyPart2 = prompt('Provide a body part','hair');
let bodyPart3 = prompt('Provide a body part','finger');
let thing = prompt('Provide a thing','movie');
let thing2 = prompt('Provide a thing','book');
let thing3 = prompt('Provide a thing','poem');
let adjective4 = prompt('Provide adjective','genuine');
let adjective5 = prompt('Provide adjective','fake');
let userNumber =prompt ("Enter your lucky number",11);
let number2 =userNumber + 1;
let number3 =userNumber/3;


let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;