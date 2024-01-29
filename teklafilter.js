document.addEventListener('DOMContentLoaded', function () {
    let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');

    let cityCategories = {
        'Batumi': [
            { name: 'Batumi Drama Theatre', city:'Batumi', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/bdt.png', text:'Located in the heart of the city, the Batumi Drama Theatre is a historic venue hosting a variety of performances, including theatrical plays and cultural events.' },
            { name: 'Adjara State Museum', city:'Batumi', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/asm.png', text:'Explore the rich history and cultural heritage of the Adjara region through exhibits, artifacts, and interactive displays at this museum.'},
            { name: 'Alphabet Tower', city:'Batumi', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/alphabet.png', text:'An iconic landmark, the Alphabet Tower represents the Georgian alphabet with its unique architecture. Visit the observation deck for panoramic views of Batumi.'},
            { name: 'Batumi Fish Market', city:'Batumi',category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/fish.png',text:'Immerse yourself in the vibrant atmosphere of the fish market, where you can sample fresh seafood and experience the local flavors.'},
            { name: 'Piazza Square', city:'Batumi',category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/piazza.png',text:'A bustling square in the Old Town, Piazza is surrounded by restaurants and cafes offering a diverse range of local and international cuisine.' },
            { name: 'Batumi Old Town', city:'Batumi',category:'Historical sites', season: ['Winter', 'Summer'], image: 'images/oldtown.png',text:'Wander through the historic Old Town with its charming architecture, narrow streets, and a blend of Ottoman and Georgian influences.' },
            { name: 'Gonio-Apsaros Fortress', city:'Batumi',category:'Historical sites', season: ['Winter', 'Summer'], image: 'images/gonio.png',text:'Explore the ancient Roman fortress located just outside Batumi, showcasing archaeological remains and offering insights into the regions history.' },
            { name: 'Medea Statue', city:'Batumi',category:'Historical sites', season: ['Winter', 'Summer'], image: 'images/medea.png',text:'The Medea Statue in Batumis Europe Square is a symbolic sculpture representing the legendary Colchian princess from Greek mythology.' },
            { name: 'Batumi Sea Port', city:'Batumi',category:'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/port.png',text:'Take a boat tour from the Batumi Sea Port to explore the coastline and enjoy the Black Sea views.'},
            { name: 'Mtirala National Park', city:'Batumi',category:'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/mtirala.png',text:'For nature enthusiasts, Mtirala National Park offers hiking trails, waterfalls, and diverse flora and fauna.'},
            { name: 'Argo Cable Car', city:'Batumi',category:'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/cable car.png',text:' Experience a thrilling ride on the Argo Cable Car, providing panoramic views of Batumi and the surrounding landscapes.'},
            { name: 'Water Sports', city:'Batumi',category:'Adventure and recreation', season: [ 'Summer'], image: 'images/water.png',text:'Batumis coastal location allows for various water activities, including jet skiing, parasailing, and paddleboarding.'},
            { name: 'Batumi Boulevard Cycling', city:'Batumi',category:'Adventure and recreation', season: ['Winter', 'Summer'], image: 'images/cycling.png',text:'Rent a bike and explore Batumi Boulevard, combining outdoor recreation with scenic views of the sea.'},
            { name: 'Batumi Aqua Park', city:'Batumi',category:'Adventure and recreation', season: [ 'Summer'], image: 'images/aqua.png',text:'Enjoy a day of family-friendly adventure at the Batumi Aqua Park, featuring water slides, pools, and entertainment for all ages.'},
            { name: 'Batumi Dolphinarium', city:'Batumi',category:'Family attractions', season: ['Winter', 'Summer'], image: 'images/dolphin.png',text:'The Batumi Dolphinarium is a popular family attraction where you can enjoy entertaining and educational dolphin and sea animal shows. The performances are not only fun for all ages but also provide insights into marine life and conservation. It is a great place for families to spend an enjoyable and educational day together.'},
            { name: 'Batumi Boulevard Playground', city:'Batumi',category:'Family attractions', season: [ 'Winter','Summer'], image: 'images/playground.png',text:'Along Batumi Boulevard, you will find a family-friendly playground with various play structures suitable for children of different ages. The location, with its proximity to the sea and pleasant surroundings, makes it an ideal spot for families to relax while the kids have fun playing.'},
            { name: 'Batumi Botanical Garden Treetop Walkway', city:'Batumi',category:'Family attractions', season: [ 'Winter','Summer'], image: 'images/botanical.png',text:'Inside the Batumi Botanical Garden, there is a treetop walkway that offers a unique and family-friendly experience. The elevated walkway provides panoramic views of the garden, making it an exciting adventure for both parents and children. It is a safe and enjoyable way for families to explore the beauty of the botanical garden from above.'},
            { name: 'Nuri Guli Lake Park', city:'Batumi',category:'Family attractions', season: [ 'Winter','Summer'], image: 'images/nuri.png',text:'Nuri Guli Lake Park is situated in the vicinity of Batumi and provides a picturesque setting with a lake. The park features walking paths, benches, and green spaces, offering a tranquil atmosphere for relaxation.'},
            { name: 'Batumi Mall', city:'Batumi',category:'Shopping', season: [ 'Winter','Summer'], image: 'images/batumimall.png',text:'Batumi Mall is a modern shopping complex located in the city center. It houses a variety of stores, including international and local brands, fashion outlets, electronics shops, and a supermarket. The mall provides a convenient and air-conditioned environment for a diverse shopping experience.'},
            { name: 'Nuri Guli Lake Park', city:'Batumi',category:'Shopping', season: [ 'Winter','Summer'], image: 'images/nuri.png',text:''},
            { name: 'Nuri Guli Lake Park', city:'Batumi',category:'Shopping', season: [ 'Winter','Summer'], image: 'images/nuri.png',text:''},
            { name: 'Nuri Guli Lake Park', city:'Batumi',category:'Shopping', season: [ 'Winter','Summer'], image: 'images/nuri.png',text:''},
            // Add more items as needed...
        ],
        'Tbilisi': [
            
            { name: 'Georgian National Museum',city:'Tbilisi', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/nationalmuseum.png', text:'Explore the rich history and culture of Georgia through exhibits and artifacts.' },
            { name: 'Tbilisi Opera And Ballet State',city:'Tbilisi', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/tbilisiopera.png', text:' Enjoy classical performances in a historic venue.'},
            { name: 'Wine Bar Khareba',city:'Tbilisi', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/khareba.png', text:'It is a well-known establishment where you can sample a wide variety of Georgian wines. The atmosphere is cozy, and they often provide information about the different wine regions and varieties. It is a great place to immerse yourself in Georgian wine culture.' },
            { name: 'Puris Sakhli',city:'Tbilisi', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/purissakhli.png',text:'It is a popular restaurant offering authentic Georgian cuisine, including a variety of khachapuris, khinkalis, and other traditional dishes. The restaurant has a charming setting with both indoor and outdoor seating, providing a great ambiance to enjoy Georgian food.' },
            { name: 'Vino Underground',city:'Tbilisi', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/vino.png', text: 'It is a wine bar and shop that focuses on natural and organic Georgian wines. The knowledgeable staff can guide you through their selection, and you can pair the wines with delicious local cheeses and snacks.'},
            { name: 'Shavi Lomi',city:'Tbilisi', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/lomi.png', text:'It Is a popular restaurant in Tbilisi known for its eclectic and creative Georgian cuisine. The menu often features a modern twist on traditional dishes, and the cozy atmosphere adds to the overall dining experience.'},
            { name: 'Mtatsminda Park',city:'Tbilisi', category: 'Family attractions', season: ['Winter', 'Summer'], image: 'images/mtatsminda.png', text:'A family-friendly amusement park offering panoramic views of the city.' },
            { name: 'Tbilisi Zoo',city:'Tbilisi', category: 'Family attractions', season: ['Winter', 'Summer'], image: 'images/zoo.png', text: 'Explore a variety of animals in a picturesque setting.' },
            { name: 'Turtle Lake',city:'Tbilisi', category: 'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/turtle.png', text:'This scenic lake offers a peaceful retreat from the city. You can take a leisurely stroll around the lake, rent paddleboats, or simply relax by the water. There are also cafes and restaurants with beautiful views of the lake.' },
            { name: 'Mtatsminda Park',city:'Tbilisi', category: 'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/mtatsminda.png', text:'It is an amusement park located on a hill overlooking Tbilisi. Apart from rides and attractions, the park offers panoramic views of the city. It is a great place for families, with a mix of entertainment and outdoor spaces.' },
            { name: 'Lisi Lake',city:'Tbilisi', category: 'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/Lisi Lake.png', text:'It is a serene reservoir surrounded by greenery. It is a popular spot for walking, jogging, and picnicking. The lake is also suitable for kayaking and paddleboarding, providing a peaceful escape just a short distance from the city.' },
            { name: 'The Tbilisi Botanical Garden',city:'Tbilisi', category: 'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/tbg.png',text:'is a lush green space featuring a diverse collection of plants. You can explore walking trails, enjoy the beautiful landscapes, and discover various themed sections, including a Japanese Garden and a Mediterranean Garden.' },
            { name: 'Narikala Fortress and Mother Georgia Statue',city:'Tbilisi', category: 'Food and wine', season: ['Winter', 'Summer'], image: 'images/mg.png', text:'Climb up to the Narikala Fortress for panoramic views of Tbilisi and visit the iconic Mother Georgia statue. The fortress grounds offer a historic atmosphere, and the surrounding area is great for hiking and exploring.' },
            { name: 'Narikala Fortress', city:'Tbilisi', category: 'Historical sites', season: ['Winter', 'Summer'], image: 'images/narikala.png', text:'It is an ancient fortress that dates back to the 4th century. It offers stunning panoramic views of Tbilisi and the Kura River. The fortress has gone through various renovations and expansions over the centuries.' },     
            { name: 'Metekhi Church of the Assumption', city:'Tbilisi', category: 'Historical sites', season: ['Winter', 'Summer'], image: 'images/metexi.png', text:'This historic church, perched on the bank of the Kura River, dates back to the 13th century. It has witnessed significant events in Georgian history and offers picturesque views of the Old Town and the river.'},
            { name: 'Sioni Cathedral', city:'Tbilisi', category:'Historical sites',season:['Winter', 'Summer'], image:'images/sioni.png',  text:'The Sioni Cathedral is a medieval Georgian Orthodox cathedral that has been reconstructed multiple times. It is known for its historic and religious significance, housing various relics and icons.'},
            { name:'Sameba Cathedral (Holy Trinity Cathedral of Tbilisi)', city:'Tbilisi', category:'Historical sites',season:['Winter', 'Summer'], image:'images/sameba.png',  text:'is one of the largest Orthodox churches globally, completed in 2004. It has become a symbol of the Georgian Orthodox Church and a prominent landmark in Tbilisi.'},
            { name:'Jvaris Mama Church', city:'Tbilisi', category:'Historical sites',season:['Winter', 'Summer'], image:'images/mama.png',  text:'This ancient church is recognized for its unique cylindrical structure and historical importance. It is a small, charming church that adds to the character of the Old Town.'},
            { name:'Anchiskhati Basilica', city:'Tbilisi', category:'Historical sites',season:['Winter', 'Summer'], image:'images/anch.png',  text:'It is one of the oldest churches in Tbilisi, dating back to the 6th century. It is known for its historical and architectural significance, and it remains an active place of worship.'},
            { name:'Tbilisi Mall', city:'Tbilisi', category:'Shopping',season:['Winter', 'Summer'], image:'images/tbilisimall.png',  text:'It is one of the largest shopping malls in the city, featuring a mix of local and international brands, a food court, entertainment options, and a cinema. It is a modern shopping destination for those looking for a variety of choices.'},
            { name:'Galleria Tbilisi', city:'Tbilisi', category:'Shopping',season:['Winter', 'Summer'], image:'images/galeria.png',  text:' Galleria Tbilisi is a shopping and entertainment complex located in the heart of the city. It houses a range of shops, cafes, and a cinema. The modern architecture and central location make it a popular spot for locals and visitors.'},
        
            // Add more items as needed..
        ],
        'Bakuriani': [
            { name: 'Sapphire Lounge',city:'Bakuriani', category: 'Food&wine', season: ['Summer','Winter'], image: 'images/saphire.png',text:'It offers a culinary journey through Georgian flavors, serving traditional dishes with a modern twist. The cozy ambiance and extensive wine selection make it a perfect place to savor the local cuisine.'},
            { name: 'Kari Bakuriani',city:'Bakuriani', category: 'Food&wine', season: ['Summer','Winter'], image: 'images/kari.png',text:'For a taste of fresh, local produce and handmade goods, visit this place. It is  a delightful spot to explore regional delicacies and experience the warmth of Georgian hospitality.'},
            { name: 'Bakuriani Amusement Park', city:'Bakuriani', category: 'Family attractions', season: ['Summer','Winter'], image: 'images/park.png',text:'Perfect for families, the Bakuriani Amusement Park offers a range of rides and attractions for all ages. The colorful atmosphere and friendly staff create a fun-filled environment for a day out with the family.'},
            { name: 'Kokhta-Mitarbi Rope Park', city:'Bakuriani', category: 'Family attractions', season: ['Summer'], image: 'images/rope.png',text:'Experience adventure and excitement at the Kokhta-Mitarbi Rope Park, featuring thrilling treetop courses and zip lines. It is  a fantastic destination for families seeking an active and memorable day outdoors.'},
            { name: 'Snowmobile Adventure Tours ', city:'Bakuriani', category: 'Family attractions', season: ['Winter'], image: 'images/snowmobile.png',text:'Families can embark on snowmobile tours, exploring the winter wonderland of Bakuriani together. It is  a unique and exhilarating way to bond while enjoying the scenic landscapes.' },
            { name: 'Kokhta Mountain Hiking Trail', city:'Bakuriani', category: 'Outdoor Activities', season: ['Summer'], image: 'images/hiking.png',text:'Adventure seekers can hike the Kokhta Mountain trail, offering breathtaking views of Bakuriani and the surrounding landscapes. The diverse flora and fauna make it a rewarding outdoor experience.' },
            { name: 'Bakuriani Ski Resort', city:'Bakuriani', category: 'Outdoor Activities', season: ['Winter'], image: 'images/ski.png',text:'Known for its excellent winter sports facilities, Bakuriani Ski Resort is a haven for skiing and snowboarding enthusiasts. The resort caters to all skill levels, making it a popular destination for outdoor recreation.'},
            { name: 'Chitakhevi Quad Biking', city:'Bakuriani', category: 'Outdoor Activities', season: ['Summer','Winter'], image: 'images/quad.png',text:'Experience the thrill of quad biking through the Chitakhevi forest trails. It is an adrenaline-pumping adventure for those seeking an off-road experience amidst the natural beauty of Bakuriani.'},
            { name: 'Kokhta-Mitarbi Ski Jumping Center', city:'Bakuriani', category: 'Adventure and Recreation', season: ['Winter'], image: 'images/kokhta.png',text:'Witness or participate in ski jumping activities at the Kokhta-Mitarbi Ski Jumping Center. The center hosts events and provides a platform for those looking to add an extra dose of excitement to their visit.'},
            { name: 'Bakuriani Spa & Wellness Center', city:'Bakuriani', category: 'Health and Wellness', season: ['Summer','Winter'], image: 'images/spa.png',text:'Unwind and rejuvenate at the Bakuriani Spa & Wellness Center, offering a range of therapeutic treatments and relaxation options. The serene atmosphere and skilled therapists ensure a blissful experience.'},
            { name: 'Bakuriani Souvenir Market', city:'Bakuriani', category: 'Shopping', season: ['Summer','Winter'], image: 'images/suvenir.png',text:'Explore the Bakuriani Souvenir Market for a variety of locally crafted souvenirs, including handmade textiles, traditional Georgian crafts, and unique gifts to commemorate your visit.'},
            { name: 'Kokhta-Mitarbi Snow Park', city:'Bakuriani', category: 'Winter Sports and Recreation', season: ['Winter'], image: 'images/snowboard.png',text:'For snowboarders and freestyle skiers, the Kokhta-Mitarbi Snow Park is a playground of jumps, rails, and features, providing an exhilarating experience in the snowy landscape.'},
            { name: 'Bakuriani Ice Skating Rink', city:'Bakuriani', category: 'Winter Sports and Recreation', season: ['Winter'], image: 'images/ice.png',text:'Enjoy the classic winter activity of ice skating at the Bakuriani Ice Skating Rink. The rink is suitable for all skill levels and adds a charming winter touch to your visit'},
            { name: 'Bakuriani Sledging Hills', city:'Bakuriani', category: 'Winter Sports and Recreation', season: ['Winter'], image: 'images/hills.png',text:'Experience the thrill of sledding down the Bakuriani Sledging Hills, a popular activity for families and adventure enthusiasts alike. The hills offer a fantastic snowy playground for all ages.'},

        

            // Add more items as needed...
        ],
        'Kutaisi':[
            { name: 'Gelati Monastery', city:'Kutaisi', category: 'Arts and Culture', season: ['Summer','Winter'], image: 'images/gelati.png', text:'Gelati Monastery, a UNESCO World Heritage Site, is a masterpiece of medieval Georgian architecture. Founded in the 12th century by King David the Builder, it boasts stunning frescoes and intricate mosaics. The peaceful surroundings and historical significance make it a must-visit for those interested in Georgias cultural heritage.' },
            { name: 'Kutaisi State Historical Museum', city:'Kutaisi', category: 'Arts and Culture', season: ['Summer','Winter'], image:'images/museum.png', text:'Immerse yourself in Kutaisis rich history at the State Historical Museum. The museum showcases artifacts from different periods, offering a comprehensive journey through Georgias past. From ancient artifacts to medieval exhibits, it provides a captivating glimpse into the regions cultural evolution.' },
            { name: 'Meskhishvili Theatre', city:'Kutaisi', category: 'Arts and Culture', season: ['Summer','Winter'], image: 'images/mesxi.png', text: 'For a taste of contemporary Georgian arts, head to Meskhishvili Theatre. This vibrant venue hosts a variety of performances, including plays, concerts, and dance shows, providing an opportunity to experience the modern cultural scene in Kutaisi.'},
            { name: 'Kutaisi Central Market', city:'Kutaisi', category: 'Food&wine', season: ['Summer','Winter'], image: 'images/market.png', text:'Dive into the heart of Kutaisis culinary scene at the Central Market. Sample local cheeses, fresh fruits, and traditional Georgian dishes. It is a sensory delight, allowing you to taste the flavors that define Georgian cuisine.' },
            { name: 'Wine Cellar "Winery Khareba"', city:'Kutaisi', category: 'Food&wine', season: ['Summer','Winter'], image: 'images/winecellar.png', text: 'Discover the art of winemaking at Winery Khareba. Located in the picturesque outskirts of Kutaisi, this cellar offers wine tastings with a breathtaking view. Experience the unique flavors of Georgian wines, known for their ancient winemaking traditions.'},
            { name: 'Kutaisi Botanical Garden', city:'Kutaisi', category: 'Family attractions', season: ['Summer','Winter'], image: 'images/kbg.png', text:'A peaceful and green space to explore with your family. The botanical garden is a great place for a leisurely stroll and to enjoy nature.'},
            { name: 'Sataplia Nature Reserve',city:'Kutaisi', category: 'Family Attractions', season: ['Summer','Winter'], image: 'images/sataplia.png', text:'Sataplia Nature Reserve is a family-friendly destination with walking trails and a dinosaur-themed park. Explore the caves and see the footprints of dinosaurs imprinted in the rocks. The panoramic views from the park make it a great spot for a family outing.' },
            { name: 'Kutaisi Park', city:'Kutaisi', category: 'Family Attractions', season: ['Summer','Winter'], image: 'images/kpark.png', text:'Kutaisi Park is a serene public space in Kutaisi, Georgia, favored for its well-kept greenery and walking paths. Families often enjoy leisurely strolls and picnics in this peaceful urban retreat. It serves as a popular spot for relaxation in the heart of the city.' },
            { name: 'Prometheus Cave (Kumistavi Cave)', city:'Kutaisi', category: 'Family Attractions', season: ['Summer','Winter'], image: 'images/promete.png', text: 'A spectacular cave system with stunning stalactite and stalagmite formations. The cave offers guided tours, and the experience is both educational and visually impressive.'},
            { name: 'Bagrati Cathedral', city:'Kutaisi', category: 'Historical Sites', season: ['Summer','Winter'], image: 'images/bagrati.png', text:'Bagrati Cathedral, a symbol of Kutaisi, dates back to the 11th century. Despite some restoration, it remains an impressive example of medieval Georgian architecture. Climb to the top for panoramic views of Kutaisi.'},
            { name: 'Prometheus Cave',city:'Kutaisi', category: 'Historical Sites', season: ['Summer','Winter'], image: 'images/Promete1.png', text:'Explore the mystical underground world of Prometheus Cave, adorned with stalactites and stalagmites. The cave has a rich history and is associated with ancient Greek mythology. Guided tours provide insight into its geological wonders and cultural significance.' },
            { name: 'Nokalakevi Archaeological Site', city:'Kutaisi', category: 'Historical Sites', season: ['Summer','Winter'], image: 'images/nokalakevi.png', text:'Nokalakevi, also known as Archaeopolis, is an ancient fortress and archaeological site. With roots dating back to the 4th century BC, it offers a glimpse into the regions strategic and cultural history through its well-preserved ruins.' },
            { name: 'Kutaisi Botanical Garden', city:'Kutaisi', category: 'Outdoor Activities', season: ['Summer','Winter'], image: 'images/kbg.png', text:'Relax in the tranquility of Kutaisi Botanical Garden, a lush oasis featuring diverse plant species and scenic walking paths. Wander through themed sections such as the Japanese Garden and Alpine Garden, providing a peaceful retreat for nature lovers within the heart of Kutaisi.' },
            { name: 'Rafting on the Rioni River', city:'Kutaisi', category: 'Adventure and Recreation', season: ['Summer','Winter'], image: 'images/rafting.png', text:'For an adrenaline-pumping adventure, try rafting on the Rioni River. Experienced guides lead thrilling rafting excursions through the rivers rapids, offering a perfect blend of excitement and the scenic beauty of the Imereti region' },
            { name: 'Kutaisi Mall',  city:'Kutaisi',category: 'Shopping', season: ['Summer','Winter'], image: 'images/karva.png', text:'For a modern shopping experience, visit Kutaisi Mall. Housing a variety of shops, including international brands, it is a convenient destination for those looking to explore contemporary retail options.' },
        
            
        ],
        'Mestia': [
         { name: 'Mestia Historical-Ethnographic Museum', city:'Mestia', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/ethnomuseum.png', text:'Explore the rich cultural heritage of Svaneti at the Mestia Historical-Ethnographic Museum, showcasing traditional Svan artifacts, historical exhibits, and a glimpse into the regions unique lifestyle. The museum is housed in a medieval tower, adding to the immersive experience.'},
         { name: 'Ushguli Architecture and Ethnography Museum', city:'Mestia', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/umuseum.png', text:'Immerse yourself in the architectural wonders of Ushguli and learn about the local culture at the Ushguli Architecture and Ethnography Museum. The exhibits offer insights into the construction techniques of Svan towers and the daily life of the people in this UNESCO World Heritage site.'},
         { name: 'Lunch at Chuberi Restaurant', city:'Mestia', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/chuberi.png', text:'Indulge in Svanetis culinary delights at Chuberi Restaurant in Mestia, offering a menu filled with local specialties like khachapuri, kubdari, and Svanetian salt. The cozy ambiance and warm hospitality enhance the dining experience. '},
         { name: 'Wine Tasting at Amrauli Winery, Ushguli', city:'Mestia', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/taste.png', text:'Discover the unique flavors of Svaneti wines at Amrauli Winery in Ushguli. Surrounded by stunning mountain views, this winery provides an excellent opportunity to savor local varietals and learn about the winemaking traditions of the region'},
         { name: 'Hatsvali Adventure Park', city:'Mestia', category: 'Family Attraction', season: ['Winter'], image: 'images/hatsvali.png', text:'For a family-friendly adventure, visit Hatsvali Adventure Park in Mestia. The park offers zip-lining, rope courses, and other exciting activities set against the breathtaking backdrop of the Caucasus Mountains.'},
         { name: 'Chazhashi Village, Ushguli', city:'Mestia', category: 'Historical Sites', season: ['Winter', 'Summer'], image: 'images/village.png', text:'Explore the ancient village of Chazhashi in Ushguli, known for its well-preserved Svan towers and UNESCO-listed historical significance. Wander through cobblestone streets and witness the timeless beauty of the architecture.'},
         { name: 'Latali Church of St. George', city:'Mestia', category: 'Historical Sites', season: ['Winter', 'Summer'], image: 'images/latali.png', text:'Visit the Latali Church of St. George in Mestia, an architectural gem dating back to the 10th century. Admire the medieval frescoes and the religious importance of this historical site.'},
         { name: 'Tetnuldi Ski Resort', city:'Mestia', category: 'Outdoor Activities', season: ['Winter'], image: 'images/tetnuldi.png', text:'Enjoy thrilling winter sports at Tetnuldi Ski Resort in Mestia, offering a range of slopes for skiers and snowboarders. The panoramic views of the surrounding mountains add to the excitement.'},
         { name: 'Paragliding from Mount Zuruldi, Ushguli', city:'Mestia', category: 'Outdoor Activities', season: [ 'Summer'], image: 'images/paragliding.png', text:'Experience an adrenaline rush by paragliding from Mount Zuruldi in Ushguli. Soar above the Svaneti landscape and take in breathtaking views of the Caucasus Mountains.'},
         { name: 'Svaneti Horse Riding', city:'Mestia', category: 'Adventure and Recreation', season: ['Winter'], image: 'images/horse.png', text:'Engage in a thrilling horse riding adventure through the scenic landscapes of Svaneti. Experienced guides lead you on trails that showcase the natural beauty and cultural heritage of the region.'},
         { name: 'Mountain Biking in Ushguli Valley', city:'Mestia', category: 'Adventure and Recreation', season: [ 'Summer'], image: 'images/bikingmestia.png', text:'Explore the rugged terrain of Ushguli on a mountain biking adventure, discovering hidden trails and enjoying the freedom to navigate the breathtaking valleys and meadows.'},
         { name: 'Svaneti Jeep Tours', city:'Mestia', category: 'Adventure and Recreation', season: ['Winter', 'Summer'], image: 'images/jeep.png', text:'Opt for an exciting jeep tour in Mestia, exploring remote areas and scenic viewpoints that are otherwise challenging to reach. This off-road adventure adds an element of excitement to your Svaneti experience.'},
         { name: 'Mineral Springs in Ushguli', city:'Mestia', category: 'Health and Wellness', season: ['Winter', 'Summer'], image: 'images/mineral.png', text:'Rejuvenate your body and mind by visiting the natural mineral springs in Ushguli. The therapeutic properties of the water, combined with the pristine mountain air, create a peaceful and relaxing environment.'},
         { name: 'Mestia Market Square', city:'Mestia', category: 'Shopping', season: ['Winter', 'Summer'], image: 'images/.png', text:'Immerse yourself in the local culture by exploring the bustling Mestia Market Square, where you can find handmade crafts, traditional Svaneti souvenirs, and local produce. '},
         { name: 'Ushguli Craft Shops', city:'Mestia', category: 'Shopping', season: ['Winter', 'Summer'], image: 'images/craft.png', text:'Discover unique handmade crafts and souvenirs in the craft shops of Ushguli, showcasing the artistic talents of the local community. From woodwork to textiles, these shops offer a variety of authentic Svan products.'},
         { name: 'Spa Day at Hotel Banguriani', city:'Mestia', category: 'Adventure and Recreation', season: ['Winter', 'Summer'], image: 'images/bangu.png', text:'Indulge in the ultimate relaxation experience at Hotel Banguriani with their exquisite Spa Day package. Unwind in luxurious surroundings, pamper yourself with rejuvenating treatments, and escape the stresses of everyday life in this idyllic retreat nestled in the heart of serene landscapes.'}
         
         
         ],
         'Mtskheta' : [
         { name: 'Salobie Restaurant', city:'Mtskheta', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/salobie.png', text:'Delight in traditional Georgian cuisine at Salobie, located in the heart of Mtskheta. Known for its warm hospitality, the restaurant offers a diverse menu featuring classic dishes like khachapuri and khinkali, paired with local wines.'},
         { name: 'Wine Cellar at Château Mukhrani', city:'Mtskheta', category: 'Food&wine', season: ['Winter', 'Summer'], image: 'images/muk.png', text:'Experience a wine-tasting journey at the Wine Cellar of Château Mukhrani, where you can savor exquisite Georgian wines amidst the picturesque vineyards and learn about the countrys winemaking heritage.'},
         { name: 'Mtskheta Fortress', city:'Mtskheta', category: 'Family attractions', season: ['Winter', 'Summer'], image: 'images/fortress.png', text:'Explore the historic Mtskheta Fortress, where families can wander through ancient ruins, climb medieval towers, and enjoy panoramic views of the city and surrounding landscapes.'},
         { name: 'Jvari Park', city:'Mtskheta', category: 'Family attractions', season: ['Winter', 'Summer'], image: 'images/jvarip.png', text:'Bring the family to Jvari Park, a recreational area offering playgrounds, picnic spots, and walking trails with stunning vistas of Mtskheta, making it an ideal place for a day of outdoor fun.'},
         { name: 'Mtskheta Archaeological Museum', city:'Mtskheta', category: 'Family attractions', season: ['Winter', 'Summer'], image: 'images/arch.png', text:'Discover the citys rich history at the Mtskheta Archaeological Museum, featuring artifacts and exhibits that trace the cultural evolution of Mtskheta and its significance in Georgian history.'},
         { name: 'Mtskheta Local Artisans Market', city:'Mtskheta', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/mmarket.png', text:'Experience the local arts scene at the artisans market, where craftsmen showcase handmade jewelry, ceramics, and textiles, providing a glimpse into Mtskhetas vibrant artistic community.'},
         { name: 'Svetitskhoveli Cathedral', city:'Mtskheta', category: 'Arts and culture', season: ['Winter', 'Summer'], image: 'images/sveti.png', text:' Immerse yourself in the cultural and religious heritage of Mtskheta by visiting the Svetitskhoveli Cathedral, a UNESCO World Heritage site and one of the most important religious buildings in Georgia.'},
         { name: 'Jvari Monastery', city:'Mtskheta', category: 'Historical sites', season: ['Winter', 'Summer'], image: 'images/jvari.png', text:'Explore the iconic Jvari Monastery, a UNESCO World Heritage site, situated on a hill overlooking Mtskheta. The monastery dates back to the 6th century and offers breathtaking views of the confluence of the Aragvi and Kura rivers.'},
         { name: 'Shio-Mgvime Monastery Complex', city:'Mtskheta', category: 'Historical sites', season: ['Winter', 'Summer'], image: 'images/shio.png', text:'Discover the Shio-Mgvime Monastery Complex, a serene retreat nestled in a picturesque gorge. The complex includes medieval churches, caves, and beautifully landscaped grounds with a tranquil atmosphere.'},
         { name: 'Mtskheta National Park', city:'Mtskheta', category: 'Outdoor activities', season: ['Winter', 'Summer'], image: 'images/national.png', text:'Embark on outdoor adventures in Mtskheta National Park, where hiking trails lead to scenic viewpoints, waterfalls, and diverse flora and fauna.'},



         ],
    };

   
   
   
   
   
     let productFilter = [];

    function showProduct(city, category, season) {
        list.innerHTML = '';

        if (!city && !category && !season) {
            // If no filters are provided, show all products
            productFilter = Object.values(cityCategories).flat();
        } else {
            // Filter based on provided criteria
            productFilter = Object.values(cityCategories)
                .flat()
                .filter(item =>
                    (!city || item.city === city) &&
                    (!category || item.category === category) &&
                    (!season || item.season.includes(season))
                );
        }

        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');

            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);

            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);


             // create text under the title
        let newText = document.createElement('div');
        newText.classList.add('text');
        newText.innerText = item.text || ''; // Use the text property or an empty string if not available
        newItem.appendChild(newText);


            list.appendChild(newItem);
        });
        count.innerText = productFilter.length;
    }

    filter.addEventListener('submit', function (event) {
        event.preventDefault();
        let valueFilter = event.target.elements;
        showProduct(valueFilter.City.value, valueFilter.Category.value, valueFilter.Season.value);
    });
});
