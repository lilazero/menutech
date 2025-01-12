'use client';

import { Button } from './button';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { CreateNewBusinessPopup } from '../CreateNewBusinessPopup';

export default function CreateNewBusinessBtnComponent() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Button 
        onClick={() => setShowPopup(true)}
        className="flex items-center gap-2"
      >
        <PlusCircle className="h-4 w-4" />
        Create New Business
      </Button>
      {showPopup && (
        <CreateNewBusinessPopup 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
