function copytotext() {
    let inputtext = parseFloat(document.getElementById("myinput").value);
    let outputtext = parseFloat(document.getElementById("ourinput").value);
    let result = ">>Current account balance : " + inputtext + " บาท" + ", " +
                 "Current cash balance : " + outputtext + " บาท";
    document.getElementById("mytextarea").value = result;
}

function proceed() {
    let amount = parseFloat(document.getElementById("amount").value);
    let accountbalance = parseFloat(document.getElementById("myinput").value);
    let cashbalance = parseFloat(document.getElementById("ourinput").value);
    let action = document.getElementById("operation").value;

    if (isNaN(amount) || amount <= 0) {
        alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
        return;
    }

    if (action === "deposit") {
        if (cashbalance < amount) {
            alert("เงินสดไม่พอสำหรับการฝาก");
            return;
        }
        cashbalance -= amount;
        accountbalance += amount;
    } else if (action === "withdraw") {
        if (accountbalance < amount) {
            alert("เงินในบัญชีไม่พอสำหรับการถอน");
            return;
        }
        accountbalance -= amount;
        cashbalance += amount;
    }

    document.getElementById("myinput").value = accountbalance;
    document.getElementById("ourinput").value = cashbalance;

    document.getElementById("mytextarea").value +=
        "\n>> Current account balance: " + accountbalance + 
		" บาท, Current cash balance: " + cashbalance + " บาท";
}