'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Checkbox } from '@radix-ui/react-checkbox';

interface CreateNewBusinessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateNewBusinessPopup({ isOpen, onClose }: CreateNewBusinessPopupProps) {
  const [formData, setFormData] = useState({
    BusinessName: '',
    BusinessType: '',
    BusinessLogoLink: '',
  });
  const [businessTypes, setBusinessTypes] = useState<string[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newType, setNewType] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');

  useEffect(() => {
    // Fetch existing business types
    fetch('/api/business-types')
      .then(res => res.json())
      .then(data => setBusinessTypes(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/businesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onClose();
        // Optionally refresh the business list
        window.location.reload();
      }
    } catch (error) {
      console.error('Error creating business:', error);
    }
  };

  const handleTypeSelect = (type: string) => {
    if (type === 'add-new') {
      setIsAddingNew(true);
    } else {
      setSelectedType(type);
      setFormData(prev => ({ ...prev, BusinessType: type }));
    }
  };

  const handleNewTypeSubmit = () => {
    if (newType) {
      setSelectedType(newType);
      setFormData(prev => ({ ...prev, BusinessType: newType }));
      setBusinessTypes(prev => [...prev, newType]);
      setIsAddingNew(false);
      setNewType('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Business</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              value={formData.BusinessName}
              onChange={(e) => setFormData(prev => ({ ...prev, BusinessName: e.target.value }))}
              required
            />
          </div>
          <div className="relative">
            <Label htmlFor="businessType">
              Business Type {selectedType && `(Selected: ${selectedType})`}
            </Label>
            {!isAddingNew ? (
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search business type..." />
                <CommandList>
                  <CommandEmpty>No business type found.</CommandEmpty>
                  <CommandGroup heading="Existing Types">
                    {businessTypes.map((type) => (
                      <CommandItem
                        key={type}
                        value={type}
                        onSelect={() => handleTypeSelect(type)}
                        className={selectedType === type ? "bg-accent text-accent-foreground" : ""}
                      >
                        {type}
                        {selectedType === type && (
                          <Checkbox className="ml-auto h-4 w-4" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandGroup heading="Options">
                    <CommandItem onSelect={() => handleTypeSelect('add-new')}>
                      + Add new business type
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            ) : (
              <div className="flex gap-2">
                <Input
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  placeholder="Enter new business type"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setIsAddingNew(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button type="button" onClick={handleNewTypeSubmit}>
                  Add
                </Button>
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="logoLink">Logo URL</Label>
            <Input
              id="logoLink"
              value={formData.BusinessLogoLink}
              onChange={(e) => setFormData(prev => ({ ...prev, BusinessLogoLink: e.target.value }))}
            />
          </div>
          <Button type="submit">Create Business</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
