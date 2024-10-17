import React, { useState } from 'react';
import { Link } from 'lucide-react';

interface LinkInputProps {
  onSubmit: (link: string) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ onSubmit }) => {
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link.trim()) {
      onSubmit(link.trim());
      setLink('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <div className="flex items-center border rounded-lg overflow-hidden">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste video or image URL"
          className="flex-grow p-2 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-300"
        >
          <Link size={20} />
        </button>
      </div>
    </form>
  );
};

export default LinkInput;