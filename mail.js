function sentmail(){
l = document.getElementById("Label")
n = document.getElementById("input").value
if(n==""){
    l.innerHTML = "Name Can't Be Empty"
    return
}

Email.send({
      Host : "smtp.elasticemail.com",
      Username : "oberoy968@gmail.com",
      Password : "015D9164F1CC617C182254A742798A5C4A63",
      To : 'oberoy968@gmail.com',
      From : "oberoy968@gmail.com",
      Subject : n,
      Body : "Visited our tic - tac - toe Game"
    }).then(
      message => alert(message)
    );
    window.location.href="tic.html"
}