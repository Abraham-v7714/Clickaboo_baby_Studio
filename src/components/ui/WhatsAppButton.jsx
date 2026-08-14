import React from 'react';
import { Button } from './Button';
import { getWhatsAppUrl } from '@/data/business';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ 
  message, 
  variant = "default", 
  size = "default", 
  className, 
  children,
  showIcon = true
}) {
  const url = getWhatsAppUrl(message);
  
  return (
    <Button 
      asChild 
      variant={variant} 
      size={size} 
      className={className}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {showIcon && <MessageCircle className="w-5 h-5 mr-2" />}
        {children || "WhatsApp Us"}
      </a>
    </Button>
  );
}
