
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('send_form')) {
      var input_blanter = document.getElementById('wa_email');
  
      /* Whatsapp Settings */
      var walink = 'https://web.whatsapp.com/send',
          phone = '6285343623495',
          walink2 = 'Halo saya ingin mendaftar Asuransi  ',
          text_yes = 'Terkirim.',
          text_no = 'Isi semua Formulir lalu klik Send.';
  
      /* Smartphone Support */
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          var walink = 'whatsapp://send';
      }
  
      if ("" != input_blanter.value) {
  
          /* Call Input Form */
          var input_select1 = document.querySelector('input[name="carPaket"]:checked').value,
              input_name1 = document.getElementById("regist_nasabah").value,
              input_number1 = document.getElementById("regist_wa").value,
              input_email1 = document.getElementById("regist_email").value,
              input_bb = document.getElementById("wa_bb").value,
              input_waris_name = document.getElementById("wa_waris_name").value,
              input_waris_ttl = document.getElementById("wa_waris_ttl").value,
              input_textarea1 = document.getElementById("wa_textarea").value;
  
          /* Final Whatsapp URL */
          var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
              '*Nama Nasabah :* ' + input_name1 + '%0A' +
              '*No. HP :* ' + input_number1 + '%0A' +
              '*Alamat Email :* ' + input_email1 + '%0A' +
              '*Tinggi/Berat badan :* ' + input_bb + '%0A' +
              '*Nama Ahli Waris :* ' + input_waris_name + '%0A' +
              '*Tanggal Lahir Ahli Waris :* ' + input_waris_ttl + '%0A'+
              '*Hubungan Dengan Ahli Waris :*' + input_select1 +'%0A' +
              '*Alasan Bergabung :*' + input_textarea1 + '%0A';
  
          /* Whatsapp Window Open */
          window.open(blanter_whatsapp, '_blank');
          document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + '</span>';
      } else {
          document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + '</span>';
      }
    }
  });