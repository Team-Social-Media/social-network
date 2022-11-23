import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SidebarData = [
  {
    title: "Movies",
    icon: <MovieIcon />,
  },
  {
    title: "Books",
    icon: <LocalLibraryIcon />,
  },
  {
    title: "Songs",
    icon: <LibraryMusicIcon />,
  },
]

export default SidebarData;