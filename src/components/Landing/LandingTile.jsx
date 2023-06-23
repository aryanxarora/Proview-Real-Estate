function LandingTile() {
  return (
    <div>
      <div
        className="rounded-xl p-3 bg-top bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")',
        }}
      >
        <div className="m-3">
          <h1 className="font-sans text-3xl font-semibold leading-tight text-white">
            Where affordability meets sustainability
          </h1>
          <p className="text-white mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nihil fuga saepe non accusamus numquam nulla sunt ipsum ducimus
            officiis dicta mollitia totam distinctio unde, atque, dolorum optio
            animi adipisci!
          </p>
        </div>
        <div className="h-52"></div>
        <div className="bg-white p-5 rounded-lg">
          <h1 className="font-sans font-semibold text-2xl leading-none">
            Find your place
          </h1>
          <p className="text-sm mt-10">
            <span className="text-slate-400">in</span>{" "}
            <span className="font-medium underline">Montreal, Quebec</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingTile;
