let scoreC;
let scoreP;
const btnStart = document.querySelector('#start-button');
const divHeading = document.querySelector('#heading-div');
const divScore = document.querySelector('#score-div');
const headingScore = document.querySelector('#score-heading');

const divImg = document.querySelector('#img-div');
const imgPlayer = document.querySelector('#player-img');
const imgMachine = document.querySelector('#machine-img');
const textComment = document.querySelector('#comment-text');

const divButton = document.querySelector('#button-div');
const divOption = document.querySelector('#option-div');

const modalVictory = new bootstrap.Modal(document.querySelector('#victoryModal'));
const modalLoss = new bootstrap.Modal(document.querySelector('#lossModal'));

const replayV = document.querySelector('#replay-button-v');
const replayL = document.querySelector('#replay-button-l');



const updateScore = function() {
    headingScore.innerText = `${scoreC} : ${scoreP}`;
    if(scoreP > 9)
    {
        modalVictory.show();
    }
    else if(scoreC > 9)
    {
        modalLoss.show();
    }
    
}

const loadGame = function () {
    divHeading.classList.toggle('hide');
    divScore.classList.toggle('hide');
    divImg.classList.toggle('hide');
    divButton.classList.toggle('hide');
    divOption.classList.toggle('hide');
    scoreC = 0;
    scoreP = 0;
    textComment.innerText = "Let's Begin..";
    imgPlayer.setAttribute('src', 'resource/question.svg');
    imgMachine.setAttribute('src', 'resource/question.svg');
    updateScore();
}

const resultOut = function(x,y) {
    if(x === y)
    {
        textComment.innerText = 'DRAW';
        divOption.classList.toggle('hide');
        setTimeout(() => {textComment.innerText = '...';
        imgPlayer.setAttribute('src', 'resource/question.svg');
        imgMachine.setAttribute('src', 'resource/question.svg');
        divOption.classList.toggle('hide');},1000);
        
    }
    else {
        if((x === 2 && y === 1) || (x === 3 && y === 2) || (x === 1 && y === 3))
        {
            textComment.innerText = 'YOU WIN';
            scoreP++;
            divOption.classList.toggle('hide');
            setTimeout(() => {textComment.innerText = '...';
            imgPlayer.setAttribute('src', 'resource/question.svg');
            imgMachine.setAttribute('src', 'resource/question.svg');
            divOption.classList.toggle('hide');},1000);
        }
        else{
            textComment.innerText = 'YOU LOSS!';
            scoreC++;
            divOption.classList.toggle('hide');
            setTimeout(() => {textComment.innerText = '...';
            imgPlayer.setAttribute('src', 'resource/question.svg');
            imgMachine.setAttribute('src', 'resource/question.svg');
            divOption.classList.toggle('hide');},1000);
        }
    }
    updateScore();
}

const machineInput = function () {
    return parseInt(Math.ceil(Math.random() * 3));
}

const pushToGame = function (x,y) {
    if (x === 1) {
        imgPlayer.setAttribute('src', 'resource/rock.svg');
    }
    else if (x === 2) {
        imgPlayer.setAttribute('src', 'resource/paper.svg');
    }
    else if (x === 3) {
        imgPlayer.setAttribute('src', 'resource/scissor.svg');
    }

    if (y === 1) {
        imgMachine.setAttribute('src', 'resource/rock.svg');
    }
    else if (y === 2) {
        imgMachine.setAttribute('src', 'resource/paper.svg');
    }
    else if (y === 3) {
        imgMachine.setAttribute('src', 'resource/scissor.svg');
    }
    resultOut(x,y);
}

btnStart.addEventListener('click', loadGame);

divOption.addEventListener('click', function (e) {
    const mInp = machineInput();
    console.log(mInp);
    pushToGame(parseInt(e.target.id),mInp);
})

replayV.addEventListener('click' , function() {
    loadGame();
    loadGame();
})

replayL.addEventListener('click' , function() {
    loadGame();
    loadGame();
})