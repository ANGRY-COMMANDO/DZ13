function getOrder(computer) {
    let basePrice = 60000;
    let totalPrice = basePrice;

    if (computer.cpu === "Intel Core i7") {
        totalPrice += 20000;
    } else if (computer.cpu === "AMD Ryzen 5") {
        totalPrice += 15000;
    }
    if (computer.gpu === "Nvidia 3070RTX") {
        totalPrice += 40000;
    } else if (computer.gpu === "AMD RX 6800") {
        totalPrice += 40000;
    }
    if (computer.ram === "16 ГБ") {
        totalPrice += 8000;
    } else if (computer.ram === "32 ГБ") {
        totalPrice += 16000;
    }
    
    if (computer.storage === "1024 ГБ SSD") {
        totalPrice += 15000;
    } else if (computer.storage === "2 ТБ SSD") {
        totalPrice += 25000;
    }

    console.log(`Вы заказали компьютер со следующими характеристиками:
    Процессор: ${computer.cpu}
    Видеокарта: ${computer.gpu}
    Оперативная память: ${computer.ram} ГБ
    Жесткий диск: ${computer.storage} ГБ
    Итоговая цена: ${totalPrice} рублей`);
}

let myComputer = {
    cpu: "Intel Core i7",
    ram: "16 ГБ",
    storage: "1024 ГБ SSD",
    gpu: "Nvidia 3070RTX",
  };
  
  getOrder(myComputer);