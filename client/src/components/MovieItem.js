import React from "react";
import {PencilIcon, TrashIcon} from "@heroicons/react/outline";

function MovieItem(props) {
  return (
    <div key={props.movie.id} className="shadow border px-3 py-2 mb-1 rounded flex">
      <div className="movie-name w-9/12 h-8 flex items-center">{props.movie.name}</div>
      <div className="movie-action w-3/12 h-8 flex justify-end">
        <button className="ml-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded border border-green-500" onClick={() => props.selectMovie(props.movie)}>
          <PencilIcon className="h-5 w-5" />
        </button>
        <button className="ml-1 px-2 text-white bg-red-500 hover:bg-red-600 rounded border border-red-500" onClick={() => props.deleteMovie(props.movie)}>
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default React.memo(MovieItem);