let data = JSON.parse(localStorage.getItem("orders")) || [];

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let order = {
        name: name.value,
        lastname: lastname.value,
        phone: phone.value,
        email: email.value,
        level: level.value,
        type: type.value,
        subject: subject.value,
        note: note.value
    };

    data.push(order);
    localStorage.setItem("orders", JSON.stringify(data));

    document.getElementById("msg").innerText = "تم إرسال طلبك بنجاح 🎉";

    showOrders();
    this.reset();
});

function showOrders(){
    let box = document.getElementById("orders");
    box.innerHTML = "";

    data.forEach((o,i)=>{
        box.innerHTML += `
        <div class="order">
            <b>${o.name} ${o.lastname}</b><br>
            ${o.phone} - ${o.email}<br>
            ${o.subject} (${o.type})
        </div>`;
    });
}

showOrders();