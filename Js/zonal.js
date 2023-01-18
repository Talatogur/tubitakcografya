function imgchange(imgid) {
    var text;
    switch (imgid) {//Belirlenen text alınan id ye göre değişir
        case "1":
            text =
                "ZONAL TOPRAKLAR <br><br>Zonal Topraklar Bir bölgede etkili olan iklim ve bitki örtüsü şartlarına göre düz veya hafif eğimli yamaçlarda anakayanın ayrışması sonucu oluşan topraklardır. Bütün horizonların bulunduğu bu toprakların dağılışı, yeryüzündeki iklim ve bitki örtüsünün dağılışıyla genel olarak uyumludur.";
            break;
        case "2":
            text =
                "TUNDRA TOPRAKLARI <br><br> Tundra toprakları, özellikle Kuzey Yarım Küre'de tundra ikliminin etkili olduğu alanlarda görülür. Kışın düşük sıcaklıktan dolayı donan, yazın da çözünerek bataklık hâlini alan bu toprakların tarımsal açıdanönemi çok azdır (Görsel 1.129). Tundra toprakları, özellikle Kuzey Yarım Küre'de tundra ikliminin etkili olduğu alanlarda görülür. Kışın düşük sıcaklıktan dolayı donan, yazın da çözünerek bataklık hâlini alan bu toprakların tarımsal açıdan önemi çok azdır (Görsel 1.129).";
            break;
        case "3":
            text =
                "PODZOL TOPRAKLAR <br><br>Podzol topraklar, nemli ve soğuk ortamlarda iğne yapraklı ormanların altında oluşmuştur. A horizonu şiddetli yıkanmadan dolayı boz renklidir. Yıkanmanın fazla olması, organik maddelerin taşınmasına ve besin maddeleri bakımından da fakir bir toprak oluşumuna neden olmuştur (Görsel 1.126).";
            break;
        case "4":
            text =
                "KAHVERENGİ ORMAN TOPRAKLARI <br><br>Kahverengi orman toprakları, orta kuşağın nemli iklim bölgelerinde yaprağını döken ağaçlardan meydan gelen ormanların zemininde oluşur. Buna bağlı olarak toprak, organik madde bakımından oldukça zengin ve koyu renklidir. Yıkanmanın yeterli olmasından dolayı kireç oranı düşük olan bu topraklar, tarım açısından oldukça elverişlidir (Görsel 1.124). ";
            break;
        case "5":
            text =
                "TERRA ROSSA TOPRAKLARI <br><br>Kırmızı Akdeniz toprakları (terra rossa), Akdeniz iklim bölgesinde kızılçam ağaçları ve maki bitki örtüsü altında özellikle de kalkerler üzerinde oluşur. Bu toprakların en önemli özelliği, bileşiminde çok miktarda demir oksit bulunduğundan kırmızı renkli olmasıdır. Organik madde miktarının az olduğu bu topraklar, genellikle kalker üzerinde geliştiği için kireç yönünden zengindir. Dolin, uvala, polye gibi karstik çukurların tabanlarında oluşabilen terra rossalar, karstik yörelerdeki başlıca tarım alanlarını oluşturur (Görsel 1.123).";
            break;
        case "6":
            text =
                "LATERİT TOPRAKLAR <br><br> Laterit topraklar, sıcaklık ve nemin yüksek olduğu Ekvator çevresinde görülür. Kimyasal ayrışmanın fazla olmasından dolayı toprağın oluşumu daha kısa sürede gerçekleşirken kalınlığı artmaktadır. Yağışın fazla olması, mineraller ve humusun toprağın alt kısımlarına taşınmasına neden olmuştur. Demir oksit bakımından zengin olan lateritler kızıl renktedir. Bu topraklar, yoğun bitki örtüsüne sahip olmasına rağmen aşırı yıkanma ve canlıların humusu tüketmesi nedeniyle organik madde bakımından fakirdir. Bu durum, tarımsal verimin düşmesine yol açar (Görsel 1.122). ";
            break;
        case "7":
            text =
                "ÇERNEZYOM TOPRAKLAR <br><br>Çernozyom topraklar, orta kuşağın yarı nemli alanlarında uzun boylu çayırlar altında oluşur. Sıcaklığın düşük olması, zengin çayır örtüsünün yavaş yavaş parçalanmasına neden olmakta bu durum da toprağın organik madde yönünden zenginleşmesini sağlamaktadır. Koyu renkli olduğu için bu topraklara kara topraklar da denir. İklim bölgelerinin soğuk olması, bu topraklardan tarımdan çok hayvancılık faaliyetlerinde yararlanılmasına neden olmuştur (Görsel 1.127). ";
            break;
        case "8":
            text =
                "ÇÖL TOPRAKLARI <br><br>Çöl toprakları, yıllık yağış miktarının az ve bitki örtüsünün çok cılız olduğu çöl iklimine ait alanlarda oluşur. Çöl topraklarının en önemli özelliği yağış yetersizliğinden dolayı yıkanmanın az, şiddetli buharlaşmadan dolayı da tuz ve kireç oranının fazla olmasıdır. Organik madde bakımından fakir olan bu toprakların tarımsal değeri çok azdır. Fakat son yıllarda modern sulama teknolojilerine bağlı olarak bazı çöl topraklarında tarımsal faaliyetler görülmektedir. Nevada Çölü'nde oluşturulan tarım alanları (ABD) (Görsel 1.128). ";
            break;
        case "9":
            text =
                "DAĞ TOPRAKLARI <br><br>Dağ toprakları ince katmanlara sahip olan genelde çakıllı topraklardır. Oluşumlarında topoğrafyanın etkisi büyüktür.";
            break;
        case "10":
            text =
                "BUZUL TOPRAKLAR <br><br> Buzlu topraklar, zonal topraklar üzerinde donmuş halde su bulundurun topraklara denir. Tarımı olumsuz etkiler. ";
            break;
        case "11":
            text =
                "KIRMIZI KESTANE TOPRAKLAR <br><br>Kahverengi ve kestane renkli bozkır toprakları, yağış miktarının azaldığı orta kuşak karalarının iç kesimlerindeki bozkırlarda oluşur ve organik madde bakımından fakirdir. Yıllık yağış miktarının 400 mm'nin altına düştüğü alanlarda kahverengi bozkır toprakları, üzerine çıktığı alanlarda ise kestane renkli bozkır toprakları oluşur. Organik madde bakımından fakir olan bu topraklarda A horizonu ince, yıkanma yetersiz olduğu için de kireç birikimi fazladır (Görsel 1.125). ";
            break;
    }
    switch (imgid) {//Değişen text burada idye göre değişen değişkenlerle birlikte gerekli alanlara aktarılır.
        case "1":
            document.getElementById("map").src = "Img/Genel Harita.png";
            document.getElementById("expimg").src = "Img/Zonal-Topraklar.jpg";
            document.getElementById("exp").innerHTML = text;
            break;
        case "2":
            document.getElementById("map").src = "Img/Tundra Harita.png";
            document.getElementById("expimg").src = "Img/tundra.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "3":
            document.getElementById("map").src = "Img/Podzol harita.png";
            document.getElementById("expimg").src = "Img/podzol.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "4":
            document.getElementById("map").src =
                "Img/Orman Toprakları (Gri podzol).png";
            document.getElementById("expimg").src = "Img/ormantoprakmini.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "5":
            document.getElementById("map").src =
                "Img/Kırmızı kestane toprakları.png";
            document.getElementById("expimg").src = "Img/terrarossa.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "6":
            document.getElementById("map").src = "Img/laterit torpaklar.png";
            document.getElementById("expimg").src = "Img/laterit.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "7":
            document.getElementById("map").src = "Img/çernezyom harita.png";
            document.getElementById("expimg").src = "Img/çernezyom.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "8":
            document.getElementById("map").src =
                "Img/Çöl toprakları (sierezom).png";
            document.getElementById("expimg").src = "Img/çöl.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "9":
            document.getElementById("map").src = "Img/Dağ Toprakları.png";
            document.getElementById("expimg").src = "Img/dag.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "10":
            document.getElementById("map").src = "Img/Kutup Harita.png";
            document.getElementById("expimg").src = "Img/kutup.png";
            document.getElementById("exp").innerHTML = text;
            break;
        case "11":
            document.getElementById("map").src =
                "Img/Kırmızı kestane toprakları.png";
            document.getElementById("expimg").src = "Img/kırmızıkestane.png";
            document.getElementById("exp").innerHTML = text;
            break;
    }
}
//Geliştirici M.Talat OĞUR