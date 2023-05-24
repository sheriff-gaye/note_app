import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const bgColor = [  "#586994", // Slate Blue
  "#9B5FC0", // Purple Heart
  "#368CBF", // Steel Blue
  "#DD6E42", // Coral
  "#7DCEA0", // Sea Green
  "#EFC050", // Goldenrod
  "#A18F7F", // Taupe
  "#8BC34A", // Lime Green
  "#E4572E", // Cinnabar
  "#4B77BE", 
  "#F896D8", // Brilliant Rose
  "#3D84A8", // Steel Teal
  "#FFCDB2", // Pale Peach
  "#FFD166", // Sunglow
  "#EF476F", // Pomegranate
  "#06D6A0", // Turquoise Blue
  "#FF9F1C", // Neon Carrot
  "#118AB2", // Dark Cyan
  "#FF715B", // Coral Pink
  "#073B4C",
];
  const item = bgColor[Math.floor(Math.random() * bgColor.length)];

  return (
    <Link
      to={`/edit/${note.id}`}
      className="note"
      style={{ background: `${ item }` }}
    >
      <h4>
        {note.title.length > 40 ? note.title.substr(0, 40) + "..." : note.title}{" "}
      </h4>
      <p>{note.details}</p>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
