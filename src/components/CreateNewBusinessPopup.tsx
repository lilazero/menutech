'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
              onChange={(e) => setFormData({ ...formData, BusinessName: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Input
              id="businessType"
              value={formData.BusinessType}
              onChange={(e) => setFormData({ ...formData, BusinessType: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="logoLink">Logo URL</Label>
            <Input
              id="logoLink"
              value={formData.BusinessLogoLink}
              onChange={(e) => setFormData({ ...formData, BusinessLogoLink: e.target.value })}
            />
          </div>
          <Button type="submit">Create Business</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
