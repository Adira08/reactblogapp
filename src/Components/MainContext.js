import React,{ useState, createContext } from 'react';

export const MainContext = createContext();

export const DataContext = (props) => {
    
    const [Data, setData] = useState([
        {
            id : '1',
            title : `Kerala: God's Own Country`,
            body : `An equable climate, beautiful and serene beaches, peaceful stretch of backwaters and canals, exotic wildlife and lush green hill stations are some of the main attractions of Kerala which make a wonderful place to visit.`,
            category : 'Tourism',
            date : `September 20, 2022`,
            url : 'https://wallpaperaccess.com/full/1635201.jpg'
        },
        {
            id : '2',
            title : 'Madhya Pradesh: The Heart of Incredible India',
            body : `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.`,
            category : 'Tourism',
            date : `September 20, 2022`,
            url : 'https://gos3.ibcdn.com/india-madhya-pradesh-148408153806o.jpeg'
        },
        {
            id : '3',
            title : 'Karnataka: One state Many Worlds',
            body : `Karnataka is primarily known for its Heritage destinations and its Wildlife/ National Parks. Apart from that, it is also famous for its magical hill stations and spectacular waterfalls.`,
            category : 'Tourism',
            date : `September 20, 2022`,
            url : 'https://s3.india.com/travel/wp-content/uploads/2018/03/Karnataka-photo-21.jpg'
        },
        {
            id : '4',
            title : 'Sikkim: Small But Beautiful',
            body : `A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth.`,
            category : 'Tourism',
            date : `September 10, 2022`,
            url : 'https://periplusnortheast.com/wp-content/uploads/2019/08/Sikkim-7.jpg'
        },
        {
            id : '5',
            title : 'Punjab: India Begins Here',
            body : `The Harmandir Sahib in Amritsar is the holiest site in Sikhism, and one of the most visited tourist attractions in India.`,
            category : 'Tourism',
            date : `September 25, 2022`,
            url : 'https://cdn.britannica.com/45/84845-050-96697731/Harmandir-Sahib-Amritsar-India-Punjab.jpg'
        },
        {
            id : '1',
            title : `Sweat now shine later`,
            body : `Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart.`,
            category : 'Fitness',
            date : `September 2, 2022`,
            url : 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },
        {
            id : '2',
            title : `Balance`,
            body : `Actively working to maintain and improve your balance and stability is incredibly important, especially as you age. Improving your balance can help you avoid falls and stay active and independent.`,
            category : 'Fitness',
            date : `September 12, 2022`,
            url : `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/complex-body-movement-royalty-free-image-941096852-1547665020.jpg?resize=480:*`
        },
        {
            id : '3',
            title : `Aerobic`,
            body : `Activity that you do for more than a few minutes at a time is aerobic training. When you're doing this type of exercise, your body uses your aerobic energy system for power. And, because that metabolic system uses oxygen to help create energy, your breathing rate increases.`,
            category : 'Fitness',
            date : `September 22, 2022`,
            url : `https://post.healthline.com/wp-content/uploads/2019/02/Male_Jump_Rope_Fitness-732x549-Thumbnail.jpg`,
        },
        {
            id : '4',
            title : `Sprint`,
            body : `Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. The use of starting blocks allows the sprinter to perform an enhanced isometric preload.`,
            category : 'Fitness',
            date : `September 28, 2022`,
            url : `https://www.snackinginsneakers.com/wp-content/uploads/2020/07/Sprinting-vs-Jogging-2.jpg`,
        },
        {
            id : '5',
            title : `Flexibility`,
            body : `Possibly one of the most important types of fitness training is flexibility and mobility. Flexibility is the ability of your muscles to stretch. Mobility is being able to move your joints and tissues through their full range of motion`,
            category : 'Fitness',
            date : `September 18, 2022`,
            url : `https://healthbeat.spectrumhealth.org/wp-content/uploads/2018/01/StretchMAIN.jpg`,
        },
        {
            id : '1',
            title : `Cyber Security: Prevention is better than cure`,
            body : `Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity, and availability of computer systems, networks and data, against cyber-attacks or unauthorized access.`,
            category : `Technology`,
            date : `September 26, 2022`,
            url : `https://www.afnor.org/en/wp-content/uploads/sites/2/2017/03/20170303_webinar_cybersecurity.jpg`
        },
        {
            id : '2',
            title : `Blockchain`,
            body : `The blockchain is an open, immutable distributed public ledger that allows transactions to take place in a decentralised manner without a need for a trusted third party. Bitcoin, the first successful cryptocurrency, is a peer-to-peer electronic payment system.`,
            category : `Technology`,
            date : `September 20, 2021`,
            url : `	https://ventsmagazine.com/wp-content/uploads/2020/10/dn-blockchain.jpg`
        },
        {
            id : '3',
            title : `Artificial Intelligence (AI) & Machine Learning`,
            body : `Machine learning is the science that will take artificial intelligence to a level beyond what humans can do. ML is used to create AI systems that can learn from data rather than through programming. This will allow machines to adapt to new challenges over time.`,
            category : `Technology`,
            date : `September 22, 2021`,
            url : `	https://res.infoq.com/articles/problem-with-ai/en/headerimage/GettyImages-817293926-2.jpg`
        },
        {
            id : '4',
            title : `Internet of Things (IoT)`,
            body : `The Internet of Things is a technological revolution that represents the future of computing and communications, and its development depends on dynamic technical innovation in a number of important fields, from wireless sensors to nanotechnology.`,
            category : `Technology`,
            date : `September 23, 2022`,
            url : `https://www.bachly.com/wp-content/uploads/2018/08/internet-things.jpg`
        },
        {
            id : '5',
            title : `Cryptography`,
            body : `It is data encryption technology which provides for secure communication in the presence of malicious third-parties—known as adversaries. Encryption uses an algorithm and a key to transform an input (i.e., plaintext) into an encrypted output (i.e., ciphertext).`,
            category : `Technology`,
            date : `September 25, 2022`,
            url : `https://edge.app/wp-content/uploads/2019/05/crypto-crypto-edge.jpg`
        },
        {
            id :'1',
            title : 'Vikram Vedha',
            body : `Vikram Vedha is an action-thriller showcasing the face-off between a tough cop Vikram (Saif Ali Khan) and a dreaded gangster Vedha (Hrithik Roshan). The film underlines 'between Good & Evil, what you choose, defines you'.`,
            category : 'Bollywood',
            date : 'September 24, 2022',
            url : 'https://images.indianexpress.com/2022/09/Vikram-Vedha-poster-R-min.jpg'
        },
        {
            id :'2',
            title : 'The Ghost',
            body : `An ex-Interpol officer Vikram aka The Ghost wreaks havoc and sends shock waves across the global underworld but goes missing in action, only to remerge years later, for his beloved family.`,
            category : 'Bollywood',
            date : 'September 20, 2021',
            url : 'https://i.ytimg.com/vi/o6TOax_-A6w/maxresdefault.jpg'
        },
        {
            id :'3',
            title : 'The Woman King',
            body : `The Woman King, starring Viola Davis, is an incredible, untold story inspired by true events that took place in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.`,
            category : 'Bollywood',
            date : 'September 20, 2021',
            url : 'https://i.ytimg.com/vi/3RDaPV_rJ1Y/maxresdefault.jpg'
        },
        {
            id :'4',
            title : 'Allu Arjun in Pushpa: The Rise',
            body : `Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.`,
            category : 'Bollywood',
            date : 'September 20, 2021',
            url : 'https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg'
        },
        {
            id :'5',
            title : 'Black Adam',
            body : `Nearly 5,000 years after he was bestowed with the almighty powers of the ancient gods-and imprisoned just as quickly-Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.`,
            category : 'Bollywood',
            date : 'September 20, 2021',
            url : 'https://images.hdqwalls.com/wallpapers/black-adam-2021-movie-4z.jpg'
        },
        {
            id :'1',
            title : `Chicken Tikka Masala`,
            body : `Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured. The dish was popularized by cooks from the Indian subcontinent living in Great Britain and is offered at restaurants around the world.`,
            category : 'Food',
            date : `September 20, 2022`,
            url : `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Chicken_Tikka_Masala.jpg`,
        },
        {
            id :'2',
            title : `Masala Dosa`,
            body : `Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.`,
            category : 'Food',
            date : `September 20, 2022`,
            url : `https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg`,
        },
        {
            id :'3',
            title : `Paneer Tikka`,
            body : `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`,
            category : 'Food',
            date : `September 20, 2022`,
            url : `https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-tikka-restaurant-style.jpg`,
        },
        {
            id :'4',
            title : `Fish Rice`,
            body : `Bengal has been famous for its food and cuisine ever since the establishment of civilization in the landscape of gluttons, made up of the sovereign state of Bangladesh (earlier East Bengal or East Pakistan) and the Indian state of West Bengal.`,
            category : 'Food',
            date : `September 20 2022`,
            url : `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/hilsa_fish_curry_bengali_style.JPG`,
        },
        {
            id :'5',
            title : `Malai Kofta`,
            body : `It is a delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes. Malai means cream and kofta are fried balls. So malai kofta literally translates to koftas dunked in a creamy sauce. It is a popular Indian vegetarian dish in which potato paneer balls are served with a delicious, smooth, rich & creamy gravy.`,
            category : 'Food',
            date : `September 22, 2022`,
            url : `https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/malai-kofta-recipe.jpg`,
        }
    ]);

    return (
        <>
            <MainContext.Provider value={[Data, setData]}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}