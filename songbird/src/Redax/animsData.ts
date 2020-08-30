import { InferActionsTypes } from './store';
import { MainanimType, animsDataType } from '../types/types';


const animsData = [
	[
		{
			id: 1,
			name: 'Коде Гиас',
			species: ' コードギアス 反逆のルルーシュ',
			description:
				'История рассказывает о недалёком будущем, когда Британской Империей было захвачено полмира.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/ec47a5de1ebd60f559fee4afd739d59b.jpeg?raw=true',
			audio: require('../assets/audio/sound/Adventures/Code_Geass_Opening_1_HD.mp3')
		},
		{
			id: 2,
			name: 'Клинок рассекающий демонов',
			species: '鬼滅の刃',
			description:
				'Действие происходит в эпоху Тайсё. Ещё с древних времён ходят слухи о том, что в лесу обитают человекоподобные демоны, которые питаются людьми и ходят по ночам, ища новую жертву.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/320px-Kimetsunoyaibacharacters.jpg?raw=true',
			audio: require('../assets/audio/sound/Adventures/Demon_Slayer___OP____Gurenge__by_LiSA_HD.mp3')
		},
		{
			id: 3,
			name: 'Бродяга Кэнсин',
			species: 'るろうに剣心 -明治剣客浪漫譚-',
			description:
				'Кэнсин Химура — бродяга с тёмным прошлым и израненной душой. Бывший наёмник в период реставрации Мэйдзи, он бродит по миру и помогает людям в надежде искупить содеянное.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/unnamed.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Adventures/Rurouni_Kenshin_Opening_1.mp3')
		},
		{
			id: 4,
			name: 'Вайолет Эвергарден',
			species: 'ヴァイオレット・エヴァーガーデン',
			description:
				'Вайолет Эвергарден, молодая девушка, чья жизнь — не что иное, как война, послушно служит под командованием майора Гилберта Бугенвиллеи из армии Ляйденшафтлиха.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/01c6191df4090be6c71619c4c65acc6fc152c23cv2_00.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Adventures/Violet_Evergarden_op-_Sincerly.mp3')
		},
		{
			id: 5,
			name: 'Сага о Винланде',
			species: 'ヴィンランド・サガ',
			description:
				'1002 год. Юный и энергичный Торфинн живёт на краю земли — в Исландии, мечтая об опасных приключениях и заморских странах.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/thumb2-thorfinn-protagonist-karlsefni-vinland-saga-torufin.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Adventures/Vinland_Saga_-_Opening_1.mp3')
		},
		{
			id: 6,
			name: 'Атака титанов',
			species: '進撃の巨人',
			description:
			'С давних времён человечество ведёт свою борьбу с титанами. Титаны — это огромные существа, ростом с многоэтажный дом, которые не обладают большим интеллектом, но сила их просто ужасна.',
			image: 'https://github.com/Di72/img/blob/master/image/Adventures/images.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Adventures/Shingeki_no_Kyojin__Attack_on_Titan.mp3')
		}
	],
	[
		{
			id: 1,
			name: 'Наруто',
			species: 'ナルト',
			description:
				'В день рождения Наруто Узумаки на деревню под названием Коноха напал легендарный демон, Девятихвостый лис.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/b54820ea6b213334bc477eaca4e9ef4d2975eec8_hq.jpg?raw=true',
			audio: require('../assets/audio/sound/Shonen/Naruto_Shippuden_Opening_3___Blue_Bird_(HD).mp3')
		},
		{
			id: 2,
			name: 'Убийца Акамэ!',
			species: 'アカメが斬る',
			description:
				'Прославиться в столице — это мечта любого деревенского парня. Главный герой, Тацуми, не стал исключением.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/akame-ga-kill.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Shonen/Akame_ga_Kill_-_Opening_1___Skyreach.mp3')
		},
		{
			id: 3,
			name: 'Чёрный клевер',
			species: 'ブラッククローバー',
			description:
				'Ещё детьми Аста и Юно были оставлены у порога церкви в глухой деревушке. Мальчики пообещали друг другу, что один из них станет Королём магов.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/e6cbaccda9ce57e85038534e39b5a54c.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Shonen/Black_Clover_-_Opening_10_(HD).mp3')
		},
		{
			id: 4,
			name: 'Охотник х Охотник',
			species: 'ハンター×ハンター',
			description:
				'Охотниками в этом мире зовут людей, работающих на правительство и путешествующих по миру, выполняя всевозможные опасные задачи, начиная с поимки преступников и заканчивая поиском сокровищ в неизведанных землях.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/e1da46b02daed0929db70f923b76f35d.jpg?raw=true',
			audio: require('../assets/audio/sound/Shonen/Hunter_X_Hunter_-_Opening_1___Departure.mp3')
		},
		{
			id: 5,
			name: 'Шаман Кинг',
			species: 'シャーマンキング',
			description:
				'Йо Асакура - шаман, который может видеть и общаться с духами. Всю свою жизнь он тренируется и пытается стать сильнее - ведь в скором времени начнется турнир шаманов, победивший в котором станет Королем Шаманов.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/dc43ec34-acb7-11ea-82c5-fa163e074e61_660.jpg?raw=true',
			audio: require('../assets/audio/sound/Shonen/Shaman_King._Russian_Intro_stereo.mp3')
		},
		{
			id: 6,
			name: 'Дневник будущего',
			species: '未来日記',
			description:
				'Второй класс средней школы: у Юкитэру Амано вечные проблемы в общении со сверстниками, а потому, считая себя сторонним наблюдателем, он записывает всё, что видит, в дневник на мобильный.',
			image: 'https://github.com/Di72/img/blob/master/image/Shonen/unnamed.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Shonen/Future_Diary_-_Opening__Rus.mp3')
		}
	],
	[
		{
			id: 1,
			name: 'Этот замечательный мир!',
			species: 'この素晴らしい世界に祝福を',
			description:
				'Так уж получилось, что жизнь Казумы Сато, хикикомори, увлечённого видеоиграми, оборвалась в результате дорожно-транспортного происшествия.',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/konosuba--gods-blessing-on-this-wonderfu-1042936.jpg?raw=true',
			audio: require('../assets/audio/sound/Comedy/KONOSUBA.mp3')
		},
		{
			id: 2,
			name: 'Крутой учитель Онидзука',
			species: 'グレート・ティーチャー・オニヅカa',
			description:
				'Бывший член нагоняющей на горожан ужас банды «Онибаку», байкер Эйкити Онидзука, ставит перед собой цель стать самым крутым школьным учителем. Почему учителем? Да просто в школах полно сексуальных старшеклассниц!',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/af4ae4a862a2b7402059204159716bc8.jpg?raw=true',
			audio: require('../assets/audio/sound/Comedy/GTO_the_Animation_-_Opening_1___Driver.mp3')
		},
		{
			id: 3,
			name: 'Мой сосед Тоторо',
			species: 'となりのトトロ',
			description:
				'Главными героинями фильма являются две сестрички: 9-летняя Сацуки и 5-летняя Мэй. Когда заболевает их мать, им приходится переехать в деревню, в ветхий и полуразрушенный дом.',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/unnamed.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Comedy/Mica_Arisaka_-_Tonari_no_Totoro_(Mein_Nachbar_Totoro).mp3')
		},
		{
			id: 4,
			name: 'Класс убийц',
			species: '暗殺教室',
			description:
				'Однажды 70% Луны оказывается уничтожено неизвестным дотоле науке существом. При этом оно заявляет, что если в течение последующего года его никто не убьёт, то оно уничтожит и Землю.',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/1572169127_14.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Comedy/KillerClass.mp3')
		},
		{
			id: 5,
			name: 'Ванпанчмен ',
			species: 'ワンパンマン',
			description:
				'Главный герой не размахивает мечом, не выкрикивает боевой клич и вообще не отличается ничем, особенно героическим. Всё в этом молодом человеке по имени Сайтама так и вопит: «заурядный» — и его лысая голова, и его хилое телосложение.',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/450_1000.jpeg?raw=true',
			audio: require('../assets/audio/sound/Comedy/One_Punch_Man_-_Official_Opening_-_The_Hero.mp3')
		},
		{
			id: 6,
			name: 'Моб Психо 100',
			species: 'モブサイコ100',
			description:
				'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
			image: 'https://github.com/Di72/img/blob/master/image/Comedy/anime-mob-psycho-100-mob-psiho-100-1208300.jpg?raw=true',
			audio: require('../assets/audio/sound/Comedy/Mob_Psycho_100_-_Opening___99.mp3')
		}
	],
	[
		{
			id: 1,
			name: 'Твоя апрельская ложь',
			species: '四月は君の嘘',
			description:
				'Косэй Арима — мальчик, профессионально играющий на фортепиано, — выигрывал все детские конкурсы, его имя было известно всем начинающим музыкантам.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/3782ff5ad407746c35c00d4e5f285eaa.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Romance/Your_Lie_in_April_Opening_1_HD.mp3')
		},
		{
			id: 2,
			name: 'Истории монстров',
			species: '化物語',
			description:
				'История о Коёми Арараги, ученике третьего класса старшей школы и бывшем вампире.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/hqdefault.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Romance/Bakemonogatari_Opening_1_Sub_Español.mp3')
		},
		{
			id: 3,
			name: 'Твоё имя',
			species: '君の名は',
			description:
				'Мицуха Миямидзу — обычная девушка, уставшая от жизни в провинции. Её отец, мэр города, ведёт избирательную кампанию, а в семейном синтоистском храме ей приходится прилюдно исполнять древние ритуалы.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/Kimi_no_na_wa_i01.jpg?raw=true',
			audio: require('../assets/audio/sound/Romance/Kimi_no_Na_wa._Opening__Yumetourou__-_Extended(Sound_only).mp3')
		},
		{
			id: 4,
			name: 'Форма голоса',
			species: '聲の形',
			description:
				'Подобно миру взрослых, мир детей не терпит различий, выделяющих кого-то на фоне других, коих принято считать нормальными. Этот мир жесток, поскольку его обитатели, в отличие от обитателей мира взрослых, еще не успели научиться скрывать мерзкие мысли за напускной улыбкой.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/987.jpg?raw=true',
			audio: require('../assets/audio/sound/Romance/Koe_no_Katachi_A_Silent_Voice_OP_-_[My_Generation_by_The_Who].mp3')
		},
		{
			id: 5,
			name: 'Кланнад',
			species: 'クラナド',
			description:
				'Томоя Окадзаки — бездельник, уверенный, что жизнь скучна, а сам он ни на что не годен. Он ненавидит свой город. Вместе с другом Сунохарой они постоянно прогуливают школу и делают что им заблагорассудится.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/885f3207d074b411b6b4f3691e44a80d79a7dfeb_00.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Romance/Clannad_Opening.mp3')
		},
		{
			id: 6,
			name: 'Нодамэ Кантабиле',
			species: 'のだめカンタービレ',
			description:
				'Синъити Тиаки — талантливый молодой музыкант, мечтающий стать дирижёром. Родом он из семьи известных музыкантов и является абсолютным перфекционистом. Тиаки строг не только к себе, но и ко всем окружающим.',
			image: 'https://github.com/Di72/img/blob/master/image/Romance/49367510_nodamecantabile5.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Romance/Nodame_Cantabile_Opening.mp3')
		}
	],
	[
		{
			id: 1,
			name: 'Когда плачут цикады',
			species: 'ひぐらしのなく頃に',
			description:
				'Переехав в провинциальную деревню Хинамидзава из-за проблем со школой в другом городе, Кэйити Маэбара счастливо проводит дни в компании школьных друзей, где оказывается единственным мальчиком.',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/cicadu.jpg?raw=true',
			audio: require('../assets/audio/sound/Horror/higurashi_no_naku_koro_ni_opening_full.mp3')
		},
		{
			id: 2,
			name: 'Обещанный Неверленд',
			species: '約束のネバーランド',
			description:
				'Эмма, Норман и Рей — самые яркие дети в приюте «Благодатный дом». И под покровительством женщины, которую они называют «мамой», все дети наслаждаются комфортной жизнью. Хорошая еда, чистая одежда и прекрасная окружающая среда — что ещё может попросить сирота?',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/neverland.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Horror/The_Promised_Neverland_Op_Opening_[4K]_[60FPS].mp3')
		},
		{
			id: 3,
			name: 'Иная',
			species: 'アナザー',
			description:
				'26 лет назад в одном из третьих классов средней школы был некий ученик по имени Мисаки. Он был хорош в учёбе и в спорте, красив внешностью и пользовался популярностью в своём классе. Однако внезапно умер.',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/319449.jpg?raw=true',
			audio: require('../assets/audio/sound/Horror/Another_opening.mp3')
		},
		{
			id: 4,
			name: 'Коллекция Дзюндзи Ито',
			species: '伊藤潤二「コレクション」',
			description:
				'Коллекция анимированных историй ужасов, основанная на произведениях Дзюндзи Ито.',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/20068bc46a92.png?raw=true',
			audio: require('../assets/audio/sound/Horror/Junji_Ito_Collection_–_Opening_Theme_–_Shichiten_Battou_no_Blues.mp3')
		},
		{
			id: 5,
			name: 'Берсерк',
			species: '剣風伝奇ベルセルク',
			description:
				'Отважный молодой воин Гатс испытывает судьбу в качестве наёмника на передовой. Роковая встреча сводит Гатса с харизматичным и беспощадным юношей по имени Гриффит.',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/530719.jpg?raw=true',
			audio: require('../assets/audio/sound/Horror/Berserk_Opening_HD.mp3')
		},
		{
			id: 6,
			name: 'Вечеринка мертвецов',
			species: 'コープスパーティー',
			description:
				'Эта история начинается в начальной школе «Небесное воинство», где происходят таинственные исчезновения учеников. Весь город взбудоражен этими событиями, и вскоре удаётся найти виновника — сумасшедшего учителя, перерезавшего своих жертв ножницами.',
			image: 'https://github.com/Di72/img/blob/master/image/Horror/I51Z0BxTKUw.jpg?raw=true',
			audio: require('../assets/audio/sound/Horror/Corpse_Party_all_openings.mp3')
		}
	],
	[
		{
			id: 1,
			name: 'Старшая школа DxD',
			species: 'ハイスクールD×D',
			description:
				'Иссэй Хёдо — классический старшеклассник, все мысли которого вертятся вокруг девушек.',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/34af8de72c613c221cf9fa4330092777.jpg?raw=true',
			audio: require('../assets/audio/sound/Ecchi/Demon_Old_School.mp3')
		},
		{
			id: 2,
			name: 'Повар-боец Сома',
			species: '食戟のソーマ',
			description:
				'Сома Юкихира мечтает стать штатным шеф-поваром в ресторане отца и превзойти своего родителя на профессиональном поприще. ',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/download.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Ecchi/Soma.mp3')
		},
		{
			id: 3,
			name: 'Школа-тюрьма',
			species: 'プリズンスクール',
			description:
				'Хачимицу — элитная частная академия, известная своими строгими академическими стандартами. Впервые за всю историю существования школы двери открываются и для учеников мужского пола.',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/291aaf654250224e37c10c0522b925c8.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Ecchi/Prison_School_[Opening].mp3')
		},
		{
			id: 4,
			name: 'Нет игры — нет жизни',
			species: 'ノーゲーム・ノーライフ',
			description:
				'История фокусируется на Соре и Сиро, брате и сестре, репутация которых как безупречных NEET, хикикомори и игроманов породила легенды по всему интернету.',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/529d69e4f9ad2774ef532ece75638d1f5c22b9b4_00.jpg?raw=true',
			audio: require('../assets/audio/sound/Ecchi/No_Game_No_Life_Opening.mp3')
		},
		{
			id: 5,
			name: 'Кошечка из Сакурасо',
			species: 'さくら荘のペットな彼女',
			description:
				'Эта романтическая комедия разворачивается вокруг старшеклассника Сораты Канды, который живёт в Сакурасо, школьном общежитии для «трудных» подростков.',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/SOfiESSgzDJAhKW-800x450-noPad.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Ecchi/Sakurasou_no_Pet_na_Kanojo.mp3')
		},
		{
			id: 6,
			name: 'SHINOMETA',
			species: '下ネタという概念が存在しない退屈な世界',
			description:
				'Шестнадцать лет назад в Японии был принят закон «О воспитании детей и общественном порядке», запрещающий любое поведение, выходящее за рамки человеческой нравственности.',
			image: 'https://github.com/Di72/img/blob/master/image/Ecchi/ba5aae328dd067e36b7b810efa6fa3a406d665f6_hq.jpg?raw=true',
			audio:
			require('../assets/audio/sound/Ecchi/SHIMONETA_–_Opening_Theme_–_B_Chiku_Sentai_SOX.mp3')
		}
	]
];


export let i = 0;
let imageIncognito =
	'https://github.com/Di72/img/blob/master/image/a22abce5c728bb2eb4c76e16ddc51c1506f562b9_hq.jpg?raw=true';
const randomMain = animsData[0][Math.floor(Math.random() * animsData[0].length)]

const initialState = {
	mainanim: {
		name: '******',
		image: imageIncognito,
		audio: randomMain.audio
	} as MainanimType,
	animsData: animsData[0] as Array<animsDataType>,
	proflanims: {
		id: undefined,
		name: null,
		species: null,
		description: null,
		image: undefined,
		audio: undefined,
	} as animsDataType,
	numberRound: 1,
	gameScoreHidden: 0,
	gameScoreOpen: 0,
	clickanim: [] as Array<number>,
	end: false,
	mainPlayer: false,
	profilePlayer: false
};

type InitialStateType = typeof initialState

export const gameReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'SN/BUTTON/NEXT-ROUND':
			if (i < 5) {
				i++;
				const animWin = animsData[i][Math.floor(Math.random() * animsData[i].length)];
				console.log('Answer: ' + animWin.name);
				return {
					...state,
					proflanims: {		
						id: undefined ,
						name: null,
						species: null,
						description: null,
						image: undefined,
						audio: undefined,},
					animsData: [ ...animsData[i] ],
					numberRound: state.numberRound + 1,
					clickanim: [],
					mainanim: {
						name: '******',
						image: imageIncognito,
						audio: animWin.audio
					}
				};
			} else if (state.numberRound === 6) {
				i = 0;
				return {
					...state,
					end: true
				};
			} else {
				return {
					...state
				};
			}
		case 'SN/LIST-animS/anim-WIN':
			if (state.mainanim.name !== '******') {
				return {
					...state,
					proflanims: { ...animsData[i][action.id - 1] }
				};
			} else {
				return {
					...state,
					mainanim: { ...animsData[i][action.id - 1] },
					proflanims: { ...animsData[i][action.id - 1] },
					gameScoreHidden: state.gameScoreHidden + 5,
					gameScoreOpen: state.gameScoreHidden + 5
				};
			}
		case 'SN/LIST-animS/anim-LOSE':
			if (state.mainanim.name !== '******') {
				return {
					...state,
					proflanims: { ...animsData[i][action.id - 1] },
					clickanim: [ ...state.clickanim, action.id ]
				};
			} else if (state.clickanim.some((id) => id === action.id)) {
				return {
					...state,
					proflanims: { ...animsData[i][action.id - 1] },
					clickanim: [ ...state.clickanim, action.id ]
				};
			} else {
				return {
					...state,
					proflanims: { ...animsData[i][action.id - 1] },
					gameScoreHidden: state.gameScoreHidden - 1,
					clickanim: [ ...state.clickanim, action.id ]
				};
			}
		case 'SN/END-GAME/END-GAME':
			const animWin = animsData[0][Math.floor(Math.random() * animsData[0].length)]
			console.log('Answer: ' + animWin.name)
			return {
				...state,
					mainanim: {
						name: '******',
						image: imageIncognito,
						audio: animWin.audio
					},
					animsData: animsData[0],
					proflanims: {
						id: undefined ,
						name: null,
						species: null,
						description: null,
						image: undefined,
						audio: undefined,
					},
					numberRound: 1,
					gameScoreHidden: 0,
					gameScoreOpen: 0,
					clickanim: [],
					end: false
				
			};
		case 'SN/MAIN-PLAYER/MAIN-PLAYER-PLAY':
			return {
				...state,
				mainPlayer: true,
				profilePlayer: false
			};
		case 'SN/PROFILE-PLAYER/PROFILE-PLAYER-PLAY':
			return {
				...state,
				mainPlayer: false,
				profilePlayer: true
			};
		default:
			console.log('Answer: ' + randomMain.name);
			return {
				...state
			};
	}
};
export const actions = {
nextRoundAC: () => ({ type: 'SN/BUTTON/NEXT-ROUND' } as const),
endGameAC: () => ({ type: 'SN/END-GAME/END-GAME' } as const),
mainPlayerPlay: () => ({ type: 'SN/MAIN-PLAYER/MAIN-PLAYER-PLAY' } as const),
profilePlayerPlay: () => ({ type: 'SN/PROFILE-PLAYER/PROFILE-PLAYER-PLAY'} as const),
anim_WINCreator: (id: number)  => ({ type: 'SN/LIST-animS/anim-WIN', id} as const),
anim_LOSECreator: (id: number ) => ({ type: 'SN/LIST-animS/anim-LOSE', id } as const)
}

type ActionsType = InferActionsTypes<typeof actions>