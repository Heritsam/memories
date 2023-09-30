import qrPlaceholder from '../assets/qrPlaceholder.png';

const SurveyPage = () => {
  return (
    <section className="h-full">
      <div className="h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 px-8 py-4 shadow-xl">
        <div className="grid h-full grid-cols-12 gap-12">
          <div className="col-span-4 flex h-full items-center">
            <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 p-2 shadow-xl">
              <img src={qrPlaceholder} alt="QR CODE" />
            </div>
          </div>
          <div className="col-span-8 flex h-full flex-col justify-center">
            <h1 className="mb-4 text-5xl font-bold">Haloo Teman Mories!</h1>
            <p className="text-lg text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis fugit perferendis ducimus est ab vitae necessitatibus
              consequuntur totam consequatur rerum architecto voluptatem quia,
              enim cumque sapiente fuga officiis expedita illum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyPage;
