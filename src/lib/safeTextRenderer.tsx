import React from 'react';

/**
 * Safely renders text with basic formatting like <strong> tags
 * This replaces dangerouslySetInnerHTML with a safer alternative
 */
export const SafeTextRenderer: React.FC<{ text: string }> = ({ text }) => {
  // First, convert **text** to <strong>text</strong>
  const htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Split text by <strong> tags and render appropriately
  const parts = htmlText.split(/(<strong>.*?<\/strong>)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
          // Extract content between strong tags
          const content = part.replace(/<\/?strong>/g, '');
          return <strong key={index}>{content}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};