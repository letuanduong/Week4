let Mobile = function() {
    this.status = false;
    this.energy = 0;
    this.document = [1,2,3,4,5];             //mảng lưu trữ tin nhắn đang soạn thảo
    this.receiveMessage = [];       //mảng lưu trữ tin nhắn đã nhận
    this.sendMessage = [];          //mảng lưu trữ tin nhắn đã gửi.
    this.statusMobile = function() {   //trạng thái của bật tắt của mobile
        return this.status;
    }
    this.statusEnergy = function() { //trạng thái pin
        return this.energy;
    }
    this.powerOn = function() { //chức nắng bật điện thoại
        this.status = true;
    }
    this.powerOff = function() { //chức năng tắt điện thoại
        this.status = false
    }
    this.chargerEnergy = function() { //chức năng sạc điện thoại
        this.increaseEnergy();
    }
    this.writeMessage = function() { //viêt tin nhắn
        this.document[0] = prompt('soạn tin nhắn');
    }
    this.draffMessage = function() {
        return this.document[0]
    }
    this.sendMessage = function(send) { //gửi tin nhắn
        this.sendMessage[0] = send;
    }
    this.receiveMessage = function(receive) { //nhận tin nhắn
        this.receiveMessage[0] = receive;
    }
    this.readReceiveMessage = function() { //đọc tin nhắn
        return this.receiveMessage[0];
    }
    this.readSendMessage = function() {
        return this.sendMessage[0];
    }
    this.increaseEnergy = function() { //tăng năng lượng nếu sạch pin
        this.energy++;
    }
    this.decreaseEnergy = function() { //giảm năng lượng sau mỗi lần dùng 1 chức năng
        if(1)
            return this.energy--;
    }
    this.passWord = function() { //đặt pass khống chế  mobile hoạt động khi nguồn đã hoạt động

    }
}