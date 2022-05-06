let scoreC = 0;
let scoreP = 0;
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

const updateScore = function() {
    headingScore.innerText = `${scoreC} : ${scoreP}`;
    if(scoreP > 9)
    {
        alert("Woo Hoo! You Won the Game!");
        location.reload();
    }
    else if(scoreC > 9)
    {
        alert("Good Luck next time...");
        location.reload();
    }
    
}

const loadGame = function () {
    divHeading.classList.toggle('hide');
    divScore.classList.toggle('hide');
    divImg.classList.toggle('hide');
    divButton.classList.toggle('hide');
    divOption.classList.toggle('hide');
    updateScore();
}

const resultOut = function(x,y) {
    if(x === y)
    {
        textComment.innerText = 'DRAW';
    }
    else {
        if((x === 2 && y === 1) || (x === 3 && y === 2) || (x === 1 && y === 3))
        {
            textComment.innerText = 'WON THE MATCH';
            scoreP++;
        }
        else{
            textComment.innerText = 'YOU LOSS!';
            scoreC++;
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