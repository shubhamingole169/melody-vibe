import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import tracksData from '../data/data.json';
import './Playlist.css';

function Playlist() {
  const [tracks, setTracks] = useState(tracksData);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTracks = Array.from(tracks);
    const [movedTrack] = reorderedTracks.splice(result.source.index, 1);
    reorderedTracks.splice(result.destination.index, 0, movedTrack);
    setTracks(reorderedTracks);
  };

  return (
    <motion.div
      className="playlist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Your Playlist</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="playlist">
          {(provided) => (
            <ul className="track-list" {...provided.droppableProps} ref={provided.innerRef}>
              {tracks.map((track, index) => (
                <Draggable key={track.id} draggableId={String(track.id)} index={index}>
                  {(provided) => (
                    <motion.li
                      className="track-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={track.cover} alt={`${track.album} cover`} />
                      <div className="track-info">
                        <h3>{track.title}</h3>
                        <p>{track.artist}</p>
                      </div>
                      <span>{track.duration}</span>
                    </motion.li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </motion.div>
  );
}

export default Playlist;