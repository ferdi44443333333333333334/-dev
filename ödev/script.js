function Hesapla()
{
	let k1=Number(document.getElementById("txtKenar1").value);
	let k2=Number(document.getElementById("txtKenar2").value);
	let hipotenus=Math.sqrt((k1*k1)+(k2*k2));
	document.getElementById("sonuc").innerHTML="Hipotenüs : "+hipotenus;

	let hesapBtn=document.getElementById("btn");
	hesapBtn.onclick=Hesapla;
}