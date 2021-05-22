 document.getElementById("tinhtiendien").addEventListener("click",tinhtiendien);
 document.getElementById("lammoitiendien").addEventListener("click",lammoitiendien);
    function tinhtiendien(){
            var sodien = document.getElementById("sodien").value;
            let bac = [1549,1600,1858,2340,2615,2701]; // khai báo mảng giá tiền 1 số điện các bậc    
            var tongtien = 0;
           // alert(sodien * 1549);     
            if(isNaN(sodien) || sodien <0 ){
              alert("Số điện không hợp lệ")
            }
            else{
               if(sodien < 51){
                  tongtien = sodien * bac[0]; //bậc 1
               }
               else if(sodien < 101){
                  tongtien = 50 * bac[0] + (sodien - 50) * bac[1]; //bậc 2
               }
               else if(sodien < 201){
                  tongtien = 50 * bac[0] + 50 * bac[1] + (sodien - 50) * bac[2]; //bậc 3
               }
               else if(sodien < 301){
                  tongtien = 50 * bac[0] + 50 * bac[1] + 100 * bac[2] + (sodien - 200) * bac[3]; // bậc 4
               }
               else if(sodien < 401){
                  tongtien = 50 * bac[0] + 50 * bac[1] + 100 * bac[2] + 100 * bac[3] + (sodien - 400) * bac[4]; // bậc 5
               }
               else{
                tongtien = 50 * bac[0] + 50 * bac[1] + 100 * bac[2] + 100 * bac[3] + 100 * bac[4] + (sodien - 400) * bac[5]; // bậc 6
               }

            }
            document.getElementById("tongtien").innerHTML = tongtien; // gán html vào id tổng tiền
            var hienthi = document.getElementById("ketqua"); // hiển thì form kết quả
            hienthi.style.display = 'flex';
    };
    function lammoitiendien(){
      var hienthi = document.getElementById("ketqua"); // form kết quả
            hienthi.style.display = 'none';
      document.getElementById("sodien").value = "";
    }

 
  document.getElementById("tinhtienthue").addEventListener("click",tinhtienthue);
 document.getElementById("lammoitienthue").addEventListener("click",lammoitienthue);
    function tinhtienthue(){
            var tienluong = document.getElementById("tienluong").value;
            let bac = [5,10,15,20,25,30,35]; // khai báo mảng giá tiền 1 số điện các bậc    
            var tienthue = 0;
            var trieu = 10000000;
           // alert(sodien * 1549);     
            if(isNaN(tienluong) || tienluong <0 ){
              alert("Số tiền lương không hợp lệ")
            }
            else{
               if(tienluong < 5*trieu){
                  tienthue = tienluong * bac[0]; //bậc 1
               }
               else if(tienluong <= 10*trieu){
                  tienthue = 5*trieu * bac[0] + (tienluong - 5*trieu) * bac[1]; //bậc 2
               }
               else if(tienluong <= 18*trieu){
                  tienthue = 5*trieu * bac[0] + 5*trieu * bac[1] + (tienluong - 10*trieu) * bac[2]; //bậc 3
               }
               else if(tienluong <=32*trieu){
                  tienthue = 5*trieu * bac[0] + 5*trieu * bac[1] + 8*trieu * bac[2] + (tienluong - 18*trieu) * bac[3]; // bậc 4
               }
               else if(tienluong <= 52*trieu){
                  tienthue = 5*trieu * bac[0] + 5*trieu * bac[1] + 8*trieu * bac[2] + 14*trieu * bac[3] + (tienluong - 32*trieu) * bac[4]; // bậc 5
               }
               else if(tienluong <= 80*trieu){
                tienthue =  5*trieu * bac[0] + 5*trieu * bac[1] + 8*trieu * bac[2] + 14*trieu * bac[3] + 20*trieu * bac[4] + (tienluong - 52*trieu) * bac[5]; // bậc 6
               }
               else{
                 tienthue =  5*trieu * bac[0] + 5*trieu * bac[1] + 8*trieu * bac[2] + 14*trieu * bac[3] + 20*trieu * bac[4] + 28*trieu * bac[5] + (tienluong - 80*trieu) * bac[6]; // bậc 7
               }

            }
            document.getElementById("tienthue").innerHTML = tienthue/100; // gán html vào id tổng tiền
            var hienthi = document.getElementById("ketquathue"); // hiển thì form kết quả
            hienthi.style.display = 'flex';
    };
    function lammoitienthue(){
      var hienthi = document.getElementById("ketquathue"); // form kết quả
            hienthi.style.display = 'none';
      document.getElementById("tienluong").value = "";
    }

 



