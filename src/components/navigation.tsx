import { useState, useEffect } from 'react';
import { Mail, Shield, Palette, FileText, GraduationCap, Gavel, TrendingUp, Info, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About arcHIVE', icon: Info },
  { id: 'insurance', label: 'Insurance', icon: Shield },
  { id: 'artists', label: 'Artists', icon: Palette },
  { id: 'journalism', label: 'Journalism', icon: FileText },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'law', label: 'Law', icon: Gavel },
  { id: 'future', label: 'The Future', icon: Zap },
  { id: 'investors', label: 'Investors', icon: TrendingUp },
];

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  return (
    <nav className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-primary mb-2">arcHIVE</h1>
          <p className="text-muted-foreground text-sm">Authentic Media for the Digital Age</p>
        </div>
        
        <ul className="space-y-4 mb-12">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start space-x-3 px-4 py-3 h-auto ${
                    isActive 
                      ? 'bg-blue-50 text-primary hover:bg-blue-50' 
                      : 'text-muted-foreground hover:bg-blue-50 hover:text-primary'
                  } transition-all duration-200`}
                  onClick={() => onSectionClick(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              </li>
            );
          })}
        </ul>
        
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-3">Ready to secure your media authenticity?</p>
            <Button
              variant="link"
              className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              onClick={() => window.location.href = 'mailto:thearchivemint@mail.com'}
            >
              <Mail className="h-4 w-4 mr-2" />
              thearchivemint@mail.com
            </Button>
          </CardContent>
        </Card>
      </div>
    </nav>
  );
}
