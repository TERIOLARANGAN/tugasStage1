//indonesia
const indo = fetch(
"https://covid19.mathdro.id/api/countries/Indonesia"
)
.then((response) => response.json())
.then(
(data) =>
(document.getElementById("confirmed1").innerHTML = `confirmed: ${data.confirmed.value}`) +
(document.getElementById("recovered1").innerHTML = `recovered: ${data.recovered.value}`) +
(document.getElementById("deaths1").innerHTML = `deaths: ${data.deaths.value}`)
);

//global
const global = fetch(
"https://covid19.mathdro.id/api/"
)
.then((response) => response.json())
.then(
(data) =>
(document.getElementById("confirmed2").innerHTML = `confirmed: ${data.confirmed.value}`) +
(document.getElementById("recovered2").innerHTML = `recovered: ${data.recovered.value}`) +
(document.getElementById("deaths2").innerHTML = `deaths: ${data.deaths.value}`)
);

//tampil seluruh negara
const tampilSeluruhNegara = fetch(
"https://covid19.mathdro.id/api/confirmed"
)
.then((response) => response.json())
.then(
(data) => {
console.log(data);
for (let i = 0; i < 200; i++) {
document.getElementById("tampilkan").innerHTML += `<table>
<tr>
<th>Country</th>
<th>confirmed</th>
<th>recovered</th>
<th>deaths</th>
</tr>
<tr>
<th>${data[i].countryRegion}</th>
<th>${data[i].confirmed}</th>
<th>${data[i].recovered}</th>
<th>${data[i].deaths}</th>
</tr>
</table>`
}
});

//search dan async await (script ini yang masih belum jalan mas!!, mohon dibantu ya mas, tq)
const inputCari = document.getElementById("inputCari"); //variabel DOM untuk mengarah ke tag input
const tombolCari = document.getElementById("tombolCari").addEventListener("click", () => cariNegara(inputCari.value));
const cariNegara = async (search) => {
let response = await fetch(
`https://covid19.mathdro.id/api/countries/${search}`,
{
method: "GET",
}
);

response = await response.json();
console.log(response);

document.getElementById("tampil-cari").innerHTML = `<table>
<tr>
<th>Country</th>
<th>confirmed</th>
<th>recovered</th>
<th>deaths</th>
</tr>
<tr>
<th>${search}</th>
<th>${response.confirmed.value}</th>
<th>${response.recovered.value}</th>
<th>${response.deaths.value}</th>
</tr>
</table>`
}