// mm = window.open('/ubu/Speqtri_2021/JS/2021_09_07_Calculator/Calculator.html', '_parent', 'width=400,height=500,left=400');
// setTimeout(window.close(), 10000);
// window.self.resizeTo(200, 200);
console.log("Hello in Giorgi's Calculator!")

// ცვლადების შემოტანა ოპერაციების სამართავად:
var scr = document.querySelector('#capscreen');

// f ცვლადი - თავიდან რომ დაიწყოს აკრეფა ამიტომ გამოვიყენებთ
var f = 1;
// a, b, და c ცვლედები a+b=c 
var a = b = c ='';
// operation არითმეტიკული ოპერაციების აღმნიშვნელი
var operation = ''

// რიცხვებზე დაჭერისას ეშვება ეს ფუნქცია. თუ ნულია ახლიდან წერს, თუ სხვა ამატებს მარჯვენა მხრიდან
// გასასწორებელია, რომ გამოთვლის შესრულების შემდეგ, მარჯვნიდან კი არ ამატებდეს, არამედ ახლიდან იწყებდეს ციფრის აკრებას
function clickNum(num){
    if (f){
        console.log(scr);
        console.log('f = 1 and then f = 0 ...');
        scr.textContent = num;
        f = 0;
    }else{
        scr.textContent += num;
    }
}

// = დაჭერისას როცა გვინდა რომ ეკრანზე მყოფი წარწერა დაიანგარიშოს და გამოგვიტანოს
// გასასწორებელია თუ ეკრანზე წარწერა არასწორია არ ან მთავდრება ციფრზე, მოქმედება არ შეასრულოს (ლოგ-ში შეცდომას აგდებს)
function clickOper(oper) {
    f = 1;
    if (!a && !operation){
        a = scr.textContent;
        console.log(a);
        operation = oper;
        console.log(operation);
    }else{
        a = scr.innerHTML = eval((a+operation+scr.textContent));
        operation = oper;
    }
}


function clickCE() {
    scr.innerHTML="0";
    f = 1;
    a = operation = b = c = "";
}

// = ნიშანზე ფუნქციის მოქმედებები:
function clickSum() {
    f = 1;
    if (a && operation){
        a = scr.innerHTML = eval((a+operation+scr.textContent));
        a = operation = b = c = "";
    }
}

// C -ზე დაჭერისას როდესაც გვინდა რომ ეკრანზე განულდეს მნიშვნელობა 
function clickC(th) {
    scr.innerHTML="0";
    f = 1;
    a = operation = b = c = "";
}

// ღილაკზე დაჭერისას ბოლო სიმბოლოს წაშლა
document.getElementById("delLast").addEventListener("click", function() {
    scr3 = scr.textContent;
    console.log(scr3);
    scr3 = scr3.slice(0,scr3.length-1);
    scr.innerHTML = scr3;
  });

// =-
  document.getElementById("plusMinus").addEventListener("click", function() {
    scr.innerHTML = scr.textContent * (-1);
    f =1;
});

// %
document.getElementById("procent").addEventListener("click", function() {
    scr.innerHTML = scr.textContent/100;
    f =1;
});

// √
document.getElementById("kube").addEventListener("click", function() {
    scr.innerHTML = scr.textContent**0.5;
    f = 1;
});

