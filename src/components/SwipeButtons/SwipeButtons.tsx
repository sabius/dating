import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import './SwipeButtons.scss'

const SwipeButtons = () => {
    return (
        <div className="swipe-buttons">
            <button>
                <CloseIcon fontSize="large" />
            </button>
            <button>
                <FavoriteIcon fontSize="large" />
            </button>
        </div>
    )
};

export default SwipeButtons;