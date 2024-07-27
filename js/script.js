let elList = document.querySelector(".list");
let elSection = document.querySelector(".card_section")

let product = [
    {
        name: "Home",
        nomer:"(219) 555-0114"
    },
    {
        name: "Shop",
    },
    {
        name:"Pages",
    },
    {
        name:"Blog",
    },{
        name:"About Us",
    },
    {
        name:"About Us",
    },
    {
        name:"Contact Us"
    }
]

let card = [
    {
        image:"https://s3-alpha-sig.figma.com/img/5588/5282/b88b0bbd35c42aace99ece1952e250fc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHA2en-JOXkT9vJhguhFUH8olZU5t2QtLVxMkcXvhvv6eceYRbKaZy27fvIoXBsc1iFoQX8m~kydg8BUVhSHp1S3i7rGMtGtEyHAjtDR4z7a163dmFegU-WRDQ3lXFXTcuPzHFmXKo-pxNNvcC97b2kOWu19HCIdfNX4xohvsbC0CfzYBzrO~0M11emkSl1BGwsngOupSxOA1lOH6XrpdCSdPo2~BREzWRsbBLmPjYxolYLXHjcZY8w3vKu8tfoG93USVaFS4UCm3zn3f~XmbgwQ4PEMU6Aae8AGZAWoF9~pJCaYNb1Bfl52OTfAryKRnUxB1nm-CH~Cx0c7~CYjdA__",
        nomi:"Fresh Fruit",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/1dd3/ec41/8cbaa44aa8d77ee4cc14c725f33e84b5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=me7UfPnaIM4CtRp2s8KQMqqZk2Wrl8cQ2j7Niz0hjQi3Ak09m6~-R8dQAwtnr6tO469a7KYq4a9wCDxVTqRD5nI-BsXcAP1bMkEXojbx0cp2-wYysmV6LF6vD1~zdAditHPKeprhuvlju5DmnDHwCARzVA5spagdX5XdvoTkD-4VgsYHIjFMQuE-K4Nj6sm76ub074~wg4ODDO-psMxs2tBvo2-RpEjPS09IXXfCloSLu16TNJprglG0pNUGrgluDBHrU1QbOnu4WqzzoAj6yVCWXeWXo3Hzxt4ozPph1tRpWg5eAadtLrVaRj7XsX0ybd8NOqcz126~pKQR4EdVrQ__",
        nomi:"Fresh Indian Malta",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/d4dc/51bf/a22b43ea08c25ba24d7d1308891b022e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l59OUWqtnAQSvoqd8Qib142dR4B9lS7Q0ym2qw2A-f0OH1rILydj16XYTdePPpDq~XZS89yt73j4IHcSUS~-lDWmhN-FKjUCm78XAqtX7pv-ABELdldSSx1~kBRGzZasrikfsvNSnONfJXKb1nIN40aYbRwiVQDkijcjZmxCKqGeyXgyTQGokoEYGm725nJ63VMTRM1UVRxX7ibPKzcqPJveUoRnWvAKiwiujIvyDGkkR1nFvxjxcmQ5pM1yWTlzkmm4vKfC7RS4UuDMUW-~bjhIscuQpm52ckLVefJPp9tWWrXmoAtJZ9SioJ8CrcqBvbhgiYefAKHkJJ2FptpXIw__",
        nomi:"Fresh Fruit",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/0060/7e42/1590d2f94a62a2213eb3378ad1aa1687?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edBVs3x2QXkzttEpxTy0cq20yvgQJoM9bN88QSoAwaE9ig9RiED-RwBBq9uciucKpWGC6ESRhKtaokHLvSqjT-R3MFhWU~2gw07LmAy1geeU0Tisqp3MHVYUtpUstt1P4PLy6TEJU6Ii1rAVd~QyYxgPpKZftcNG6lRDLWAIMwI8zW-ae8mVeRFIJsxfobbj-5ew1usmafgZnUrMLxhOgnESrpOTgpuRmBpb1cLQiQ~9x35lELXQhAagz1Gu1AEOEooVwe1yY88A3YJ96FaWt5QNwPpJpjTW8LQlpBspjdoyWtfgg~Bh8Mi3ov9SqqmJpnoGKXgYkeEAMCx4TN8BNA__",
        nomi:"Chinese cabbage",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/b2a4/8360/6891ccd65c5c15fa42de2429eafd19ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TDgnhKbNLGAaQA5imTBzdxZiBUTUO4hJDa4WhArHtM2HSuHfyIFKYC9xUQ~k0EuSme2lGOHEvGGQb6V~AKuTIR9ESX2BpJjK4Gs9CMnzkMj3c7DhqWAC3dExlrmim6N9WonTTWEz3SR~SdBm9wCeYpqUvo4CJZW5u0WsjzYfGP98YQLgErfMszOdVB5ig4pbmqZk3rfnv32L~9sTuHKzMvoci7Tm1iPrq1dfVw4GXhDtyILl0Uu0a1Xmid9gVKagilEyFPNYgxT8ol9w-HMZtLEpf0i~VdBwxEL8o8yn6RzAuvf7vOWYUqu-w4YZrH4Sy5lhD0bheI0vOGyXw7gJ8w__",
        nomi:"Eggplant",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/8a64/1b99/aade1c6d813825d71e3b0fe5a361d969?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFCp8MQCE7N77KupbNwUKVVXnzXLC-u9RmQx8iq8kYWZyuV~oaCd1~enxRBCkP8lsBQkY3MI3tGAjZysBE3ToMp7243lvT3gcsenOuFARfQGSC5fsnSGMjcn0QHUq32NqKGKPHpODcBOOF7uRxW5WDTgZrTqKE3uo1efcgnOGut7iekAzO0Jx79aGST7W9o36A64tyGfhQicYKjlMkfNh9EKzaBa8O2K8R6V04qpJFZ8yX0r5hVlcFsNVb3MwkvOol4QOnGCiJXuqrTnPUUZTHJTYQW9bOteAN8e4JQu1T0a9zQsbjv4DQ-LxvVqB1bkRjI~9osg3vwwb3woHYtaGQ__",
        nomi:"Big Potatoes",
        narx:"$14.99",
        narxx:"$20.99",
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/fde1/0b49/06098017c0e42a55c431126a676d09ea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3mk9lHxzJAKkKYiJoXXE99qQgepDNF0DiqhP5ajpYAojMdr9I3hh94xWWvh7c6tZ9i6hveN8OO2oRORopm~UCMImNCx8rdoI3TO~GEcAEOUghCXSCIqATPPnZs~c3ayYanYxo5TYkJL~UgmfG-mJ6D782v~9Ud5Isrb7xMrK2SPPMzdo4kjvpnm4zV0dbx-KN4DshXWOOF-fQUC-tG9uTXls-dm7pEp8TPWzSjzekx0Eeh9zMsaImRFxVBBysMcdd0b4bd7TMwsk8pilCYHOEgPXqn3QUKSPgFw2KJAbxOtiLM0tnXVbU0Ds7PcwB13qFK0mEdQesP8jzbgzY~84A__",
        nomi:"Fresh Cauliflower",
        narx:"$20.00",
       
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/cc70/c1f6/3d810c5dc228a262f86fa0b09a4cbf2a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nC~Tc5~HknKRmYvy5qRNYVqE8hzGle~faI9FUdfm0fKa-OfTDn58vwy0RK9g6OJaOY9a-z7mElfrRViPk6eDYqAvLvCRxikxcliBP05wI~ps7k31TmCQs~GM2wgoicblhIjil7yMYRdvUWC2fe-AUNIQ93aK2MYrwQVaiIYP~YssrkrjkYEaf7a3kjakV3S5aZar7FwjChLXfsLJm~aoYf7CdznFjfA~SAG6PGFyhJNz9Ifrr8VB5IIhinY32gdMd1WGGIuVSOuBLTj0Ya6M9D~N5qbPjCznwSY63sioSLVDSviH-bhCFyWzfw~zsmHrdIGBJXbB1B4U5aCyJBta1g__",
        nomi:"Green Capsicum",
        narx:"$20.00",
       
        image2:"./img/d.png"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/1218/4afe/a65296f94f227305b1f0b55cfcb59ebe?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hb6gnn09v7x9U4qYL7NoyoYaP2moem7Mzo6RTqdML4CSZzjwLA8F0tmzoWtjxXjrYHVjSYt13M8Qh8DbglGyPCO0E4-deXGZ99lLxfP-9cV76Fd9ytnUvHTUWOEOwMCR1KAVtyZDcQBB~53lfcLs~V3iEsVvkz91V9rYkXjHjHIpbNBSt7sQONX4ri0U3XjYeSpzpNXfxYQ8vzyxvfSuIUq6QN~mtyHwTDkKL8pZ~KU144xqxUYioFGko0YiDkgFDlu2c7E7GpoNZ0Jgswopsk8-ZYhlcgxSUkIgC0PBhydIbCYuq2HOCjczH5ZgTChBZ-dGY~QQaCt7NNbk-IW4Eg__",
        nomi:"Green Chili",
        narx:"$20.00",
       
        image2:"./img/d.png"
    },
]

product.map((item) => {
    return (
        elList.innerHTML += `
       <div style="  background-color: #333333;">
          <div style="display:flex; justify-content: space-between;"> 
              <ul >
                 <li style="color:#fff">${item.name}</li>
              </ul>
          </div
          
       </div> 
       
        
            `
    )
    
})
card.map((item) => {
   
    return(
        elList.innerHTML+=`
       
        <section style="width: 90% margin:0 auto;">
   
        <div style="display:flex; justify-content: space-between;  padding-bottom: 20px; "> 
              <div style="box-shadow: 2px 3px 10px #aaaa; width: 300px"> 
                 <img style="width:200px; margin-left: 40px; " src=${item.image} alt="rasm"/>
                 <h1 style=" text-align: center;">${item.nomi}</h1>
                 <div style=" text-align: center;">
                   <span style=" font-weight: bold;">${item.narx}</span>
                   <span style="color:#999999;" >${item.narxx}</span> <br>  <br> 
                   <img src=${item.image2} alt="rasm"/>
                 </div>
              </div> 
              <div style="box-shadow: 2px 3px 10px #aaaa; width: 300px"> 
                 <img style="width:200px; margin-left: 40px; " src=${item.image} alt="rasm"/>
                 <h1 style=" text-align: center;">${item.nomi}</h1>
                 <div style=" text-align: center;">
                   <span style=" font-weight: bold;">${item.narx}</span>
                   <span style="color:#999999;" >${item.narxx}</span> <br>  <br> 
                   <img src=${item.image2} alt="rasm"/>
                 </div>
              </div> 
              <div style="box-shadow: 2px 3px 10px #aaaa; width: 300px"> 
                 <img style="width:200px; margin-left: 40px; " src=${item.image} alt="rasm"/>
                 <h1 style=" text-align: center;">${item.nomi}</h1>
                 <div style=" text-align: center;">
                   <span style=" font-weight: bold;">${item.narx}</span>
                   <span style="color:#999999;" >${item.narxx}</span> <br>  <br> 
                   <img src=${item.image2} alt="rasm"/>
                 </div>
              </div> 
              <div style="box-shadow: 2px 3px 10px #aaaa; width: 300px"> 
                 <img style="width:200px; margin-left: 40px; " src=${item.image} alt="rasm"/>
                 <h1 style=" text-align: center;">${item.nomi}</h1>
                 <div style=" text-align: center;">
                   <span style=" font-weight: bold;">${item.narx}</span>
                   <span style="color:#999999;" >${item.narxx}</span> <br>  <br> 
                   <img src=${item.image2} alt="rasm"/>
                 </div>
              </div> 
              <div style="box-shadow: 2px 3px 10px #aaaa; width: 300px"> 
                 <img style="width:200px; margin-left: 40px; " src=${item.image} alt="rasm"/>
                 <h1 style=" text-align: center;">${item.nomi}</h1>
                 <div style=" text-align: center;">
                   <span style=" font-weight: bold;">${item.narx}</span>
                   <span style="color:#999999;" >${item.narxx}</span> <br>  <br> 
                   <img src=${item.image2} alt="rasm"/>
                 </div>
              </div> 
              
              <div>
                
              
            </div>

        </section>`
    )
})
























``







