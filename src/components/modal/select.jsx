const info = [
  {
    tag: "Pledge with no reward",
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    soldOut: false,
  },
  {
    tag: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. Youve helped us launch our promotional campaign and youll be added to a special Backer member list.",
    figure: 101,
    soldOut: false,
  },
  {
    tag: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 64,
    soldOut: false,
  },
  {
    tag: "Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    text: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 0,
    soldOut: true,
  },
];

function SelectModal() {
  return (
    <div className="h-full w-screen fixed bg-[rgba(0,0,0,.4)]">
      <div>
        <span>
          <img src="" alt="" />
        </span>
        <div>
          <h2>Back this project</h2>
          <h2>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </h2>
        </div>
        {info.map((element) => {
          <div className=" border-[1.5px] flex flex-col gap-6 rounded-lg p-5 lg:p-10">
            <div>
              <span>
                <input type="radio" name="" id="" />
                <h2>{element.tag}</h2>
                <h2>{element.pledge}</h2>
              </span>
              <span>
                {element.figure}<span>left</span>
              </span>
            </div>
            <div></div>
          </div>;
        })}
      </div>
    </div>
  );
}
