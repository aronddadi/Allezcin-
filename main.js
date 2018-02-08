var seriez=$('.row .serie');
console.log(seriez);

	var starthide=6;
	var endhide=16;
	shopItems=$('.itemz .movie');

	shopItems.slice(starthide,endhide).hide();
$(function(){
// Start filters
	$(".row .serie").slice(12,16).hide();

	$('#allserie').on('click',function(){
	$('.serie').show("slow");
	$('.active').removeClass('active');
	$('#allserie').addClass('active');
	$(".row .serie").slice(12,16).hide();
});
	$('#comedyserie').on('click',function(){
	$('.serie').hide("fast");
	$('.comedyserie').show("slow");
	$('.active').removeClass('active');
	$('#comedyserie').addClass('active');
});
	$('#thrillerserie').on('click',function(){
	$('.serie').hide("fast");
	$('.thrillerserie').show("slow");
	$('.active').removeClass('active');
	$('#thrillerserie').addClass('active');
});
	$('#dramaserie').on('click',function(){
	$('.serie').hide("fast");
	$('.dramaserie').show("slow");
	$('.active').removeClass('active');
	$('#dramaserie').addClass('active');
});
	$('#scifiserie').on('click',function(){
	$('.serie').hide("fast");
	$('.scifiserie').show("slow");
	$('.active').removeClass('active');
	$('#scifiserie').addClass('active');
});
	$('#adventureserie').on('click',function(){
	$('.serie').hide("fast");
	$('.adventureserie').show("slow");
	$('.active').removeClass('active');
	$('#adventureserie').addClass('active');
});


	$(".row .movie").slice(12,16).hide();

	$('#allMovie').on('click',function(){
	$('.movie').show("slow");
	$('.active').removeClass('active');
	$('#allMovie').addClass('active');
	$(".row .movie").slice(12,16).hide();
});
	$('#comedyMovie').on('click',function(){
	$('.movie').hide("fast");
	$('.comedyMovie').show("slow");
	$('.active').removeClass('active');
	$('#comedyMovie').addClass('active');
});
	$('#thrillerMovie').on('click',function(){
	$('.movie').hide("fast");
	$('.thrillerMovie').show("slow");
	$('.active').removeClass('active');
	$('#thrillerMovie').addClass('active');
});
	$('#dramaMovie').on('click',function(){
	$('.movie').hide("fast");
	$('.dramaMovie').show("slow");
	$('.active').removeClass('active');
	$('#dramaMovie').addClass('active');
});
	$('#scifiMovie').on('click',function(){
	$('.movie').hide("fast");
	$('.scifiMovie').show("slow");
	$('.active').removeClass('active');
	$('#scifiMovie').addClass('active');
});
	$('#adventureMovie').on('click',function(){
	$('.movie').hide("fast");
	$('.adventureMovie').show("slow");
	$('.active').removeClass('active');
	$('#adventureMovie').addClass('active');
});
// End filters

// Start image changing
//prepare Your data array with img urls
        var dataArray=new Array();
        dataArray[0]="img/zoolander-2001-comedie.jpg";
        dataArray[1]="img/MagnoliaDrama1999.jpg";
        dataArray[2]="img/intouchables-2011-comedie.jpg";
        dataArray[3]="img/Survivestyle5-2004-comedie.jpg";

        //start with id=0 after 5 seconds
        var thisId=0;

        window.setInterval(function(){
            $('#thisImg').attr('src',dataArray[thisId]);
            thisId++; //increment data array id
            if (thisId==3) thisId=0; //repeat from start
        },5000);   

                var dataArray1=new Array();
        dataArray1[0]="RushHour2007Comedy.jpg";
        dataArray1[1]="img/MagnoliaDrama1999.jpg";
        dataArray1[2]="img/zoolander-2001-comedie.jpg";
        dataArray1[3]="img/lepatientanglais-1996-dramatique.jpg";

        //start with id=0 after 5 seconds
        var thisId1=0;

        window.setInterval(function(){
            $('#thisImg1').attr('src',dataArray[thisId1]);
            thisId1++; //increment data array id
            if (thisId1==3) thisId1=0; //repeat from start
        },8000); 

                var dataArray2=new Array();
        dataArray2[0]="img/lesdeuxtours-2002-aventure.jpg";
        dataArray2[1]="img/MagnoliaDrama1999.jpg";
        dataArray2[2]="img/seven-1995-thriller.jpg";
        dataArray2[3]="img/hostel-2005-thriller.jpg";

        //start with id=0 after 5 seconds
        var thisId2=0;

        window.setInterval(function(){
            $('#thisImg2').attr('src',dataArray2[thisId2]);
            thisId2++; //increment data array id
            if (thisId2==3) thisId2=0; //repeat from start
        },3000); 

                var dataArray3=new Array();
        dataArray3[0]="img/shutterisland-2010-thriller.jpg";
        dataArray3[1]="img/hostel-2005-thriller.jpg";
        dataArray3[2]="img/zoolander-2001-comedie.jpg";
        dataArray3[3]="img/RushHour2007Comedy.jpg";

        //start with id=0 after 5 seconds
        var thisId3=0;

        window.setInterval(function(){
            $('#thisImg3').attr('src',dataArray3[thisId]);
            thisId3++; //increment data array id
            if (thisId3==3) thisId3=0; //repeat from start
        },10000); 

                var dataArray4=new Array();
        dataArray4[0]="img/shutterisland-2010-thriller.jpg";
        dataArray4[1]="img/starwarsempire-1980-scifi.jpg";
        dataArray4[2]="img/zoolander-2001-comedie.jpg";
        dataArray4[3]="img/starwarsempire-1980-scifi.jpg";

        //start with id=0 after 5 seconds
        var thisId4=0;

        window.setInterval(function(){
            $('#thisImg4').attr('src',dataArray4[thisId]);
            thisId4++; //increment data array id
            if (thisId4==3) thisId4=0; //repeat from start
        },6500);      
// End imagechangeing

// Shop page js
// $(window).scroll(function(){
// 		 if($(this).scrollTop() != 0){
// 		 	$('#toTop').fadeIn()
// 		 }else {
// 			$('#toTop').fadeOut();

// 		 }
// 	});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}
// End scroll
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop:0},800);
	});
	$('#right').on('click',function(){
		shopItems.slice(starthide-6,endhide-14).hide("slow");
		shopItems.slice(starthide,endhide-8).show("slow");
		starthide=starthide+2;
		endhide=endhide+2;
	});
	$('#left').on('click',function(){
		shopItems.slice(starthide,endhide-8).hide("slow");
		shopItems.slice(starthide-6,endhide-14).show("slow");
		starthide=starthide-2;
		endhide=endhide-2;
	});
	// End shoppage js
});
// Start load more buttons
let load=0;
$('#loadMore').on('click',function(){
	if(load==0){
		$('.row .movie').slice(12,16).show("slow");
		$('#loadMore').text("Load less");
		load++;
	}
	else{
		$('.row .movie').slice(12,16).hide("fast");
		$('#loadMore').text("Load more");
		load--;
	}
});
let load2=0;
$('#loadMore2').on('click',function(){
	if(load2==0){
		$('.row .serie').slice(12,16).show("slow");
		$('#loadMore2').text("Load less");
		load2++;
	}
	else{
		$('.row .serie').slice(12,16).hide("fast");
		$('#loadMore2').text("Load more");
		load2--;
	}
});

// End load more buttons
// Fake age check
$('#older').on('click',function(){
	$('.cover').hide();
});
// End fake age check
// Fake cookie
$('#cookie').on('click',function(){
	$('.cooks').hide();
});
// end fake cookie


