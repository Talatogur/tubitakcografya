function imgchange(imgid) {
  var text;
  switch (imgid) { //Belirlenen text alınan id ye göre değişir
    case "1":
      text =
        "TÜRKİYE'DE TOPRAKLARIN DAĞILIŞI VE GENEL ÖZELLİKLERİ <br><br> Türkiye'nin sahip olduğu iklim çeşitliliği, toprak türleri bakımından oldukça zengin olmasını sağlamıştır (Harita 1.17). İklimin yanı sıra yeryüzü şekillerinin çeşitlilik göstermesi, farklı kayaç türlerinin görülmesi vb. nedenlerden dolayı aynı iklim özelliklerinin görüldüğü alanlarda dahi farklı toprak tipleri oluşmuştur.";
      break;
    case "2":
      text =
        "BOZKIR TOPRAKLAR <br><br>Denizden uzak iç bölgelerdeki step bitki örtüsü altında kahverengi ve kestane renkli bozkır toprakları görülür. Yıllık yağış miktarının az olduğu alanlarda oluşan bu topraklar, organik madde bakımından oldukça fakirdir (Görsel 1.140). ";
      break;
    case "3":
      text =
        "TERRA ROSSA <br><br>Akdeniz İklim Bölgesi'nde özellikle kalkerler üzerinde oluşan terra rossaların en önemli özelliği, bileşiminde bulunan fazla miktardaki demir oksit sebebiyle kırmızı renkte olmasıdır. Organik madde bakımından fakir olan bu topraklar kireç yönünden ise zengindir (Görsel 1.141).";
      break;
    case "4":
      text =
        "KAHVERENGİ ORMAN TOPRAKLARI <br><br>Kahverengi orman toprakları, özellikle Kuzey Anadolu Dağları ile Marmara Denizi çevresindeki dağlık alanlarda yaprak döken ağaçların oluşturduğu ormanlarda görülür. Humus bakımından zengin, verimli ve koyu renkte olan bu topraklar tarım açısından oldukça elverişlidir. Topraktaki yıkanmanın yeterli olmasından dolayı kireç oranı düşüktür (Görsel 1.142).";
      break;
    case "5":
      text =
        "PODZOL TOPRAKLAR <br><br>Podzol topraklar, dağların yüksek kesimlerinde iğne yapraklı ormanların altında oluşur. Aşırı yıkanma nedeniyle humusun taşındığı bu topraklar, besin maddeleri bakımından oldukça fakirdir               (Görsel 1.143).";
      break;
    case "6":
      text =
        "ÇERNEZYOM TOPRAKLARI <br><br>Kuzeydoğu Anadolu'da yer alan platolarda ve orman örtüsünün sona erdiği alanlarda bitki örtüsü olarak çayırlar görülür. Bu çayırlar altında humus bakımından zengin olan çernozyom topraklar oluşmuştur. Koyu renkli olduğu için “kara topraklar” olarak da adlandırılan çernozyomlarda geniş otlakların oluşması, büyükbaş hayvancılığın gelişmesini sağlamıştır (Görsel 1.144). ";
      break;
    case "7":
      text =
        " TUZLU TOPRAKLAR <br><br>Tuz Gölü ve Konya Ovası çevresinde suda çözünmüş hâldeki çeşitli tuz ve karbonatların suyun buharlaşması neticesinde toprak yüzeyinde birikmesiyle tuzlu topraklar oluşur. Tuzcul bitkilerin yetiştiği bu çorak topraklar tarım için elverişli değildir (Görsel 1.145). ";
      break;
    case "8":
      text =
        "VERTİSOLLER <br><br>Yumuşak kireç taşı ve killi kireç taşı üzerinde oluşan kalsimorfik topraklara ülkemizin birçok yerinde rastlanır. Anadolu'da kepir veya taş doğuran olarak da bilinen vertisoller; Trakya, Güney Marmara ve Muş Ovası'nda görülür.";
      break;
    case "9":
      text =
        " HİDROMORFİK <br><br>Hidromorfik topraklar, taban su seviyesinin yüksek olduğu sazlık ve bataklık alanlarda özellikle de Çukurova, Büyük Menderes ve Çarşamba gibi deltaların taşkına uğrayan kesimlerinde görülür (Görsel 1.147). Ayrıca iç bölgelerdeki drenajın iyi olmadığı bataklıklarda da oluşabilen bu toprakların üzeri ot, saz ve kamışlarla kaplıdır. ";
      break;
    case "10":
      text =
        " ALÜVYAL TOPRAKLAR <br><br>Alüvyal topraklar, akarsuların taşıdığı malzemelerin delta ovalarında (Çukurova, Çarşamba, Bafra vb.) veya iç kesimlerdeki düzlük alanlarda (Bursa, Erzurum ovaları vb.) birikmesiyle oluşur. Mineral bakımından zengin olan bu topraklar, tarım için oldukça elverişlidir (Görsel 1.148).";
      break;
    case "11":
      text =
        " REGOSOLLER <br><br> Regosoller, özellikle volkanik arazilerde (Nevşehir) akarsuların taşıdığı kum depoları üzerinde oluşur (Görsel 1.149). Kumlu ve yumuşak olan bu topraklar, patates ve soğan tarımı açısından oldukça elverişlidir. ";
      break;
    case "12":
      text =
        "LİTOSOL TOPRAKLAR <br><br>Dağlık ve engebeli bir ülke olan Türkiye'de kolüvyal topraklar oldukça geniş yer kaplar. Eğimin iyice arttığı yamaçlarda ise litosol yani taşlı topraklar görülür (Görsel 1.150). ";
      break;
    case "13":
      text =
        "RENDZİNALAR <br><br>Yumuşak kireç taşı ve killi kireç taşı üzerinde oluşan kalsimorfik topraklara ülkemizin birçok yerinde rastlanır. Yumuşak kireç taşları üzerinde oluşan rendzinalara ise Anadolu'nun birçok yerinde rastlanır (Görsel 1.146).";
      break;
  }
  switch (imgid) { //Değişen text burada idye göre değişen değişkenlerle birlikte gerekli alanlara aktarılır.
    case "1":
      document.getElementById("expimg").src = "Img/turkiyeharitasi.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "2":
      document.getElementById("expimg").src = "Img/bozkır.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "3":
      document.getElementById("expimg").src = "Img/terra.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "4":
      document.getElementById("expimg").src = "Img/kahorman.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "5":
      document.getElementById("expimg").src = "Img/podzolturk.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "6":
      document.getElementById("expimg").src = "Img/cernezyom.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "7":
      document.getElementById("expimg").src = "Img/tuzlu.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "8":
      document.getElementById("expimg").src = "Img/ıntzonalmini.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "9":
      document.getElementById("expimg").src = "Img/hidro.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "10":
      document.getElementById("expimg").src = "Img/alüv.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "11":
      document.getElementById("expimg").src = "Img/reg.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "12":
      document.getElementById("expimg").src = "Img/rito.png";
      document.getElementById("exp").innerHTML = text;
      break;
    case "13":
      document.getElementById("expimg").src = "Img/rend.png";
      document.getElementById("exp").innerHTML = text;
      break;
  }
}
//Geliştirici M.Talat OĞUR
