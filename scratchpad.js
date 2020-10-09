class button {
    //model//
    constructor() {
        this.type = type;
        this.color = color;
    }
    class number extends button {
        this.num = number
        this.
    }
    class operator extends button {
        this.op = operator
        this.action = function 
    } 
}

var model {

    function init() {
        //create the rows and columns for the "buttons" on
        //the calculator, this is the initial state before
        //any button is pressed//
        let main = document.getElementByID("app");
        //row where pressed numbers display and the answers display//
        generateElement('div', 'displayrow', 'row text-right', '', main);
        let row2 = generateElement('div', 'row2', 'row', '', '');
        //clear btn, positivenegative operator, percent, division//
        generateElement('div', 'operator', 'col-3', 'Clear', row2);
        generateElement('div', 'operator', 'col-3', '+/-', row2);
        generateElement('div', 'operator', 'col-3', '%', row2);
        generateElement('div', 'operator', 'col-3', '/', row2);
        let row3 = generateElement('div', 'row3', 'row', "", '');
        //7,8,9, multiply//
        generateElement('div', 'number', 'col-3', 7, row3);
        generateElement('div', 'number', 'col-3', 8, row3);
        generateElement('div', 'number', 'col-3', 9, row3);
        generateElement('div', 'operator', 'col-3', '', row3);
        let row4 = generateElement('div', 'row4', 'row', "", '');
        //4,5,6, minus//
        generateElement('div', 'number', 'col-3', 4, row4);
        generateElement('div', 'number', 'col-3', 5, row4);
        generateElement('div', 'number', 'col-3', 6, row4);
        generateElement('div', 'operator', 'col-3', '-', row4);
        let row5 = generateElement('div', 'row5', 'row', "", '');
        //1,2,3, plus//
        generateElement('div', 'number', 'col-3', 1, row5);
        generateElement('div', 'number', 'col-3', 2, row5);
        generateElement('div', 'number', 'col-3', 3, row5);
        generateElement('div', 'operator', 'col-3', '+', row5);
        let row6 = generateElement('div', 'row6', 'row', "", '');
        //zero, decimal, equals//
        generateElement('div', 'number', 'col-6', 0, row6);
        generateElement('div', 'operator', 'col-3', '.', row6);
        generateElement('div', 'operator', 'col-3', '=', row6);
        //append rows to the main div//
        main.appendChild(row2)
        main.appendchild(row3)
        main.appendchild(row4)
        main.appendchild(row5)
        main.appendchild(row6)
    }

//function that allows element to be generated in init function of model//
function generateElement(type, id, classList, value, parent = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList)
    newElement.innerHTML = value

    if (parent) {
        parent.appendChild(newElement);
    }

    return newElement
}


var view {
    if (this.type == 'number') {
        getElementByID('displayrow').innerHTML = this.value
    }

}


var selected = [];
var controller {
    init: function () {
        v.number.addEventListener("click", this.buttonFunction);
        v.operator.addEventListener("click", this.buttonFunction);
    },
        buttonFunction: function (e) {
            console.log(e);
            
            if (e.target.data["id"] == "operator") {
                operatorFunctions();
                selected.push[this.value];
            }
            if (e.target.data["id"] == "numerical") {
                selected.push[this.value]
            }
        },

updateView: function () {
    v.render();
}

}

function init() {
    m.init();
    v.init();
    c.init();
}

//global objects for MVC, instances

const m = Object.create(model);

const v = Object.create(view);

const c = Object.create(controller);