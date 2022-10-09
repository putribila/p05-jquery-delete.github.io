$(document).ready(function(){
    $('.kawankuw').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_baris = rid[1];
        let nkwan = $('#nkwan_'+id_baris).text();

        if(isi=='Hapus'){
            let Konfirmasi = confirm(`Bener nih mau menghapus data  ${nkwan} ??`);
            if(!Konfirmasi) return;

            $('#bagian_'+id_baris).fadeOut();
        }else{
            alert("Anda berada dalam kolom :" +$(this).html() +"!");
        }
    })
})