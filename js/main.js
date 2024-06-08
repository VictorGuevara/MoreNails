// Variables.
let menu = document.getElementById("menu_icon");
let navbar = document.getElementById("navbar");
let container_targets = document.getElementById("catalogo_targets");
let btn_view_more_models = document.getElementById("btn_ver_mas");
let contador_f = document.getElementById("contador_final");
let contador_t = document.getElementById("contador_total");
let top_container = document.querySelector('.top_container');
let contact_container = document.querySelector('.contact');

// Funciones.
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const data_nails = [
  {
    name_img: "436266090_397363899738623_1155940713791007328_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "369050956_603657315184104_5287998980374600019_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "370395896_1507182836699541_7154832630624932103_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "431490870_3552383535015330_5504614327741710651_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "418816314_743254970659181_8725094093683733196_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "418484022_1020302925739864_7365304231401160628_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "418648338_699366388985743_2323629408128726725_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "417431175_402252558816212_7644687950001816770_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "414231524_353704440600233_5439250967546943072_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "413357309_1082565352925913_2407966152393675956_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "413436519_392187383248783_3279377741006652583_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412441670_1578025123024082_3385715743965001116_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412582368_1557291508406915_4824034058916175108_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412568671_1060751375051016_6680397853037163750_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412696745_886771829828598_703447524207783057_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412354112_681035237208225_1325038968336333294_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "412174617_390779239963262_4552395995719839379_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "411872710_1414300552490622_569707712574082293_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "411436037_346390697994411_5072444120182549477_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "410866842_328271143317716_5766088752782206275_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "410866843_733408018374492_2475332315456714706_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "409307828_1428674151048223_6480331973527374824_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "409073426_727436155532676_6548146844638513947_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "408465697_367875692562127_1290890881646553004_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "408620875_1488141168396985_1609448030517365620_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "407679306_1134238807929969_8106049151493987205_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "405204273_1521514851958072_3239578679756119769_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "404057526_1456914314867364_2565386279724098300_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "403962458_3610697475844004_5592384099806918991_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "404261054_835674138285914_5118632798850919185_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "404002977_876220937485259_7432804477882634351_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "404653706_173832182454761_6744319151393676169_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "402514929_641259531513873_7804792625718808225_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "400519272_893122485501064_2018080403007323218_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "399571958_1445085206036877_1072599709840720144_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "400160986_717537560425091_4754394112916202755_n.jpg",
    price: 15.0,
    price_discount: 12.0,
  },
  {
    name_img: "399490735_877123070259404_3100756618321995588_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "399423802_874770820706641_9060318729657146281_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "398765752_2050250845336182_4926953472367829566_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "399302121_727860482558605_1267675674093034687_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "396483411_2540032796165201_1413280939221697307_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "396194852_706109494782490_4283001034914685169_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "394647447_278375077877947_6281986582416812710_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "395526434_1041404160538243_5971158977520933496_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "394823772_247635078282224_6684170040527013828_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "395087570_1040686453726899_4380063992519662106_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "394819086_710450287637641_5509081051308386939_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "395038540_711205160398616_118329101671056010_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "394441978_809325007542102_5343795954795195547_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "393116696_1435584387018494_5493304963713899760_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "386455226_722537083032332_8178880924030714593_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "386327118_299752262803686_8844836960474988970_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "385002787_6728460430530377_1955002789410797261_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "384602858_1346363862923315_8315747907325247807_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "381790443_1808993586222327_4432278755766120010_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "381231785_3682358835330858_1649602409849975909_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "380956258_693303426039123_1887858554354919846_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "380520840_851612346163440_1583263724591450639_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "378470662_269808445900391_2055154051982926264_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "377229291_873391810840161_920170323016222052_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "377311391_337457281961379_5294260824911303829_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "374812144_1320051931967683_6983696738295346694_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "373635118_1488468461912974_5807063749661944648_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "373133769_1024586065354844_8024327598348303737_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "366483737_223192310309916_5430175719698790518_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "365466705_830800398774903_1741290289734756862_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "363842865_3001910176608943_2097622772666345200_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "360051934_3525702227671110_8358611082688548094_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "355860724_1016673669741885_1660622328119261938_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "355827294_529785459230637_2960712657572745736_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "356098910_605484805017319_8632073948023332011_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "352439364_778236673801429_6811796984765295985_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "352392688_1146772793392033_3144256052376408629_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "352125876_1230607160790750_8476027311260923520_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "352160942_245345224793761_6033405778667674171_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "351727707_811335847085802_3423832275526998136_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "352770016_637758201572736_6112642800406612911_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
  {
    name_img: "351435773_928155001600140_1226971546491343419_n.jpg",
    price: 15,
    price_discount: 12.0,
  },
];

let contador_v = 0;
let count_data = data_nails.length;
let count_views_models = 6;

// Función para listar menos o más...
const f_btn_contador = () => {
  contador_v++;
  contador_v++;
  contador_v++;
  contador_v++;
  contador_v++;
  contador_v++;
  contador_v++;
  contador_v++;

  // Validamos...
  if (contador_v <= count_data) {
    // Ejecutamos la función para pintar los diseños...
    a_nails_data(contador_v);

    // Actualizamos los contadores...
    contador_f.innerHTML = contador_v;
    contador_t.innerHTML = count_data;
  } else {
    // Ejecutamos la función para pintar los diseños...
    a_nails_data(count_data);

    // Quitamos el boton de ver más...
    btn_view_more_models.hidden = true;

    // Actualizamos los contadores...
    contador_f.innerHTML = count_data;
    contador_t.innerHTML = count_data;
  }
};

const a_nails_data = async (count_d) => {
  let contador = 0;
  if (contador_v <= count_data) {
    let targets = "";
    for (let i = 0; i < count_d; i++) {
      contador++;
      targets += `
				<div class="box">
					<div class="content_img">
						<img loading="lazy" src="img/${data_nails[i].name_img}">
					</div>
					<h4>Diseño No. ${contador}</h4>
					<h5>$ ${data_nails[i].price.toFixed(2)}</h5>
					<h5>
						<a href="https://wa.me/50378977473/?text=Hola%20me%20gustaría%20saber%20si%20¿Se%20mantiene%20el%20precio%20del%20Diseño%20No.%20${contador}?" class="btn_box">¿Consultar Diseño? <span class="icon_button_c"><i class='bx bxs-paint'></i></span></a>
					</h5>
					<!-- <div class="cart">
						<a href="#">
							<i class='bx bx-shopping-bag'></i>
						</a>
					</div> -->
					<br>
				</div>
			`;
    }

    container_targets.innerHTML = "";
    container_targets.innerHTML = targets;
  } else {
    let targets = "";
    for (let i = 0; i < count_data; i++) {
      contador++;
      targets += `
				<div class="box">
					<div class="content_img">
						<img loading="lazy" src="img/${data_nails[i].name_img}">
					</div>
					<h4>Diseño No. ${contador}</h4>
					<h5>$ ${data_nails[i].price.toFixed(2)}</h5>
					<h5>
						<a href="https://wa.me/50378977473/?text=Hola%20me%20gustaría%20saber%20si%20¿Se%20mantiene%20el%20precio%20del%20Diseño%20No.%20${contador}?" class="btn_box">¿Consultar Diseño? <span class="icon_button_c"><i class='bx bxs-paint'></i></span></a>
					</h5>
					<!-- <div class="cart">
						<a href="#">
							<i class='bx bx-shopping-bag'></i>
						</a>
					</div> -->
					<br>
				</div>
			`;
    }

    container_targets.innerHTML = "";
    container_targets.innerHTML = targets;
  }
};

// Ejectuamos al inicio...
f_btn_contador();

// Función para el boton de ir al inicio...
window.onscroll = () => {
	if (document.documentElement.scrollTop > 100) {
		top_container.classList.add('show');
	} else {
		top_container.classList.remove('show');
	}
}

// Evento click para el boton de ver mas diseños.
btn_view_more_models.addEventListener("click", () => {
  f_btn_contador(6);
});

// Fucnción para el boton de ir al principio de la pagina.
top_container.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});