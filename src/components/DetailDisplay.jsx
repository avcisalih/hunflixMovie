import { baseImgUrl } from "../constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div className=" mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <div className="flex gap-5">
        {data.map((item) =>
          item.logo_path ? (
            <div className=" bg-white rounded p-2">
              <img
                src={baseImgUrl + item.logo_path}
                className="w-[100px] h-[40px] object-contain"
              />
            </div>
          ) : (
            <span>{item.name}</span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
