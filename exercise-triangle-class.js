class Triunghi {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c
    }
    perimetru(){
        console.log('Triunghi perimetru')
        return this.a + this.b + this.c;
    }
    arie(){
        // radical din  (semiperimetru * (semiperimetru - a)*(semiperimetrul - b)*(semiperimetru - c)) ;
        console.log('Triunghi arie')
        let semiperimetru = this.perimetru() / 2;
        return Math.sqrt(semiperimetru * (semiperimetru - this.a) * (semiperimetru - this.b) * (semiperimetru - this.c));
    }
}

const triunghi = new Triunghi(10, 13, 12);
console.log(triunghi.perimetru());
console.log(triunghi.arie()) 

//adaugam o clasa care se numeste isoscel

class Isoscel extends Triunghi {
    constructor(x, y){
        super(x, x, y)
    }
    perimetru(){
        console.log('Isoscel perimetru')
        return 2 * this.a + this.c
    }
}
const isoscel = new Isoscel(10, 18);
console.log(isoscel.perimetru())
console.log(isoscel.arie())

class Echilateral extends Triunghi{
    constructor(e){
        super(e,e,e)
    }
    perimetru(){
        console.log('Echilateral perimetru')
        return 3 * this.a
    }
    arie(){
        // latura la patrat * radical din 3, impartit la 4
        console.log('Echilateral arie');
        return Math.pow(this.c, 2)*Math.sqrt(3) / 4;
    }
}
const echilateral = new Echilateral(5)
console.log(echilateral.perimetru())
console.log(echilateral.arie());

class Dreptunghic extends Triunghi{
    constructor(a, b, c){
        super(a, b, c)
    }
    arie(){
        console.log('Aria dreptunghic')
        return this.a * this.b / 2 ;
    }
}
const dreptunghic = new Dreptunghic(3, 4, 5);
console.log(dreptunghic.arie())

class DreptunghicIsoscel extends Isoscel {
    constructor(a, b){
        super(a, b);
    }
    arie(){
        console.log('Aria triunghi driscoscel')
        return Math.pow(this.a, 2) / 2;
    }
}
const dreptunghicisoscel = new DreptunghicIsoscel(3, 5)
console.log(dreptunghicisoscel.arie())
console.log(dreptunghicisoscel.perimetru())