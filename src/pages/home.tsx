import { useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/navigation';
import { Section } from '@/components/section';
import { SignupForm } from '@/components/signup-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lock, 
  Link2, 
  Network, 
  ArrowDown, 
  AlertTriangle, 
  CheckCircle, 
  Shield,
  Palette,
  FileText,
  GraduationCap,
  Gavel,
  TrendingUp,
  Mail,
  Building,
  Globe,
  Settings,
  Users,
  Zap,
  AlertCircle,
  Eye,
  ShieldCheck
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'about';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.getAttribute('id') || 'about';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      <main className="ml-80">
        {/* About arcHIVE Section */}
        <Section 
          id="about" 
          className="bg-gradient-to-br from-primary/10 via-white to-secondary/10"
        >
          <div className="max-w-4xl mx-auto px-12 text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Purpose-Built for Media Integrity
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                The Truth Lives in the 
                <span className="text-primary"> Code</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                In a world where deepfakes are indistinguishable from reality and AI-generated content floods every platform, arcHIVE provides cryptographic proof of authenticity that can't be faked, manipulated, or questioned.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">C2PA Manifests</h3>
                  <p className="text-muted-foreground text-sm">Cryptographically verifiable metadata embedded directly in media files</p>
                </CardContent>
              </Card>
              <Card className="border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Link2 className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Blockchain Anchoring</h3>
                  <p className="text-muted-foreground text-sm">Immutable ownership and provenance records on Ethereum mainnet</p>
                </CardContent>
              </Card>
              <Card className="border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Network className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">IPFS Storage</h3>
                  <p className="text-muted-foreground text-sm">Decentralized content addressing ensures permanent accessibility</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => handleSectionClick('insurance')}
              >
                Explore Industry Solutions
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Get notified when arcHIVE launches
                </p>
                <SignupForm />
              </div>
            </div>
          </div>
        </Section>

        {/* Insurance Section */}
        <Section id="insurance" className="bg-white">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-12 w-12 text-accent" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Insurance Industry</h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5" />
                    The Problem: Fraudulent Claims Epidemic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Insurance fraud costs the industry over $40 billion annually, with photo and video manipulation being primary weapons of deceit. Sophisticated deepfake technology now allows fraudsters to create convincing fake accident scenes, property damage, and medical conditions that are virtually impossible to detect with traditional verification methods. Claims adjusters spend countless hours investigating suspicious media, often lacking the technical tools to definitively prove manipulation. The rise of AI-generated content has made this problem exponentially worse, creating a crisis of trust that threatens the fundamental business model of insurance companies. Current photo analysis software can only catch obvious manipulations, leaving subtle AI-generated fraudulent evidence undetected. The financial impact extends beyond direct losses to increased processing costs, legal fees, and higher premiums for honest customers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    The arcHIVE Solution: Cryptographic Truth
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE transforms insurance claims processing by providing cryptographic proof of media authenticity that cannot be forged or manipulated. When policyholders capture damage photos or accident videos using arcHIVE-enabled devices, C2PA manifests are immediately embedded with device signatures, GPS coordinates, timestamps, and sensor data, creating an immutable digital fingerprint. This content is then hashed and anchored to the blockchain within seconds, establishing a permanent chain of custody that can be verified by any claims adjuster instantly. Insurance companies can integrate arcHIVE's verification APIs to automatically flag suspicious submissions, reducing fraud investigation time from days to seconds. The technology creates a powerful deterrent effect—knowing that authentic media can be instantly verified makes fraudulent claims exponentially more difficult to execute. Beyond fraud prevention, arcHIVE enables faster claim processing for legitimate claims, improving customer satisfaction while significantly reducing operational costs and legal exposure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* News Callout 1 */}
        <div className="ml-80 py-12 bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-100">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center">
              <div className="text-sm font-medium text-red-600 mb-2">Breaking News Impact</div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "1,300% Surge in Deepfake Fraud Attempts - Insurance Companies Face $200M in Losses"
              </blockquote>
              <cite className="text-sm text-gray-600">
                — Pindrop's 2025 Voice Intelligence Report, January 2025
              </cite>
            </div>
          </div>
        </div>

        {/* Artists Section */}
        <Section id="artists" className="bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Palette className="h-12 w-12 text-purple" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Digital Artists & Creators</h2>
              <div className="w-24 h-1 bg-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5" />
                    The Problem: AI Theft and Attribution Crisis
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital artists face an existential threat as AI models scrape millions of artworks without permission, training systems that can replicate artistic styles in seconds and flooding the market with derivative works. Platforms like Midjourney, DALL-E, and Stable Diffusion have been trained on artists' life work without consent or compensation, essentially creating competing products using stolen intellectual property. Artists discover their distinctive styles being sold as AI-generated art, with no legal recourse or proof of original authorship when their work was created before blockchain timestamps existed. The speed of AI generation makes it impossible for artists to compete on volume, while the lack of verifiable ownership records means original creators cannot prove their work predates AI reproductions. Social media platforms and marketplaces struggle to distinguish between human-created and AI-generated content, often favoring faster-produced AI art in algorithmic recommendations. This creates a race to the bottom where authentic human creativity is systematically devalued and displaced.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    The arcHIVE Solution: Provable Authenticity & Rights Protection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE creates an impenetrable shield around original artwork by binding content directly to its creation metadata and ownership history through cryptographic proofs. When artists create using arcHIVE-integrated tools, every brushstroke, layer, and modification is logged with C2PA manifests that record creation software, timestamps, device signatures, and process workflows that AI cannot replicate. The system generates unique content hashes that prove exactly when each piece was created, establishing priority over any subsequent AI reproductions or style mimicry. Artists can embed usage licenses and AI-training restrictions directly into their media files, creating legally enforceable boundaries that persist wherever their work travels online. Platforms and marketplaces can integrate arcHIVE verification to automatically authenticate human-created content, giving original artists preferential placement and premium pricing. The blockchain-anchored provenance creates a permanent record of artistic lineage, enabling artists to prove ownership in legal disputes and claim damages from unauthorized AI training or reproduction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* News Callout 2 */}
        <div className="ml-80 py-12 bg-gradient-to-r from-purple-50 to-pink-50 border-y border-purple-100">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center">
              <div className="text-sm font-medium text-purple-600 mb-2">Legal Victory</div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "Getty Images Seeks $1.7 Billion in AI Art Theft Lawsuit Against Stability AI"
              </blockquote>
              <cite className="text-sm text-gray-600">
                — U.S. District Court filing, December 2024
              </cite>
            </div>
          </div>
        </div>

        {/* Journalism Section */}
        <Section id="journalism" className="bg-white">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Journalism & Media</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5" />
                    The Problem: Truth in the Age of Deepfakes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Journalism faces its greatest credibility crisis as deepfake technology makes it impossible to distinguish real events from sophisticated fabrications, undermining public trust in media institutions. Politicians and public figures can now credibly claim that authentic footage is "deepfake" while bad actors create convincing fake videos to spread disinformation and manipulate public opinion. Citizen journalists capturing police brutality, protests, or government misconduct find their crucial documentation dismissed as potentially manipulated, regardless of authenticity. News organizations spend enormous resources fact-checking and verifying user-generated content, often unable to definitively prove authenticity of critical footage. The speed of modern news cycles means that fake content often spreads faster than verification can occur, allowing false narratives to take root before truth can be established. International conflicts, political events, and social movements are increasingly shaped by the viral spread of unverified media that may be entirely fabricated. Legacy verification methods like reverse image searches and metadata analysis are easily defeated by sophisticated AI manipulation tools.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    The arcHIVE Solution: Instant Verification Infrastructure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE restores trust in visual journalism by providing instant, cryptographic verification that transforms any smartphone into a certified truth-capture device for breaking news and investigations. When journalists or citizens capture footage using arcHIVE, the system immediately generates C2PA manifests with device signatures, GPS coordinates, network conditions, and sensor data that deepfakes cannot replicate, creating an unforgeable digital certificate of authenticity. This verification data is instantly published to IPFS and anchored on the blockchain, establishing permanent proof of when and where content was captured before it can be questioned or suppressed. News organizations can integrate arcHIVE verification into their editorial workflows, automatically flagging authentic content for fast-track publishing while identifying potentially fabricated submissions. The system creates a new standard for documentary evidence where authentic footage gains instant credibility while unverified content is properly labeled as potentially unreliable. Courts, investigators, and human rights organizations can rely on arcHIVE-verified media as legally admissible evidence, restoring the evidentiary power of visual documentation in an age of digital skepticism.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* News Callout 3 */}
        <div className="ml-80 py-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center">
              <div className="text-sm font-medium text-blue-600 mb-2">Corporate Fraud Alert</div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "UK Engineering Firm Loses $25 Million to Deepfake Video Conference Scam"
              </blockquote>
              <cite className="text-sm text-gray-600">
                — Arup Engineering CFO impersonation case, February 2024
              </cite>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <Section id="education" className="bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-12 w-12 text-green" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Education & Academia</h2>
              <div className="w-24 h-1 bg-green mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5" />
                    The Problem: Academic Integrity in Crisis
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Educational institutions struggle with an epidemic of AI-generated assignments that are impossible to detect with current plagiarism tools, fundamentally undermining academic assessment and learning outcomes. Students can now generate entire video projects, research presentations, and multimedia portfolios using AI tools, making it nearly impossible for educators to verify original work or assess genuine student capability. Traditional academic portfolios lack permanent provenance records, meaning students cannot prove authorship of their work when applying to advanced programs or jobs, especially when competing against AI-enhanced submissions. Institutional archives face the challenge of preserving student-created media over decades while maintaining verifiable attribution as technology platforms change and files migrate between systems. The rise of AI tutoring and content generation tools has created an arms race where honest students are disadvantaged against those using sophisticated AI assistance without disclosure. Educational institutions lack standardized methods to verify authentic student work, leading to inconsistent policies and unfair treatment across different classes and professors.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    The arcHIVE Solution: Verified Learning Records
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE creates a permanent, verifiable record of authentic student work that follows learners throughout their academic and professional careers, establishing trust in human-created academic achievements. Students and educators use arcHIVE-integrated tools to capture authentic creation processes, recording screencast workflows, revision histories, and collaborative contributions with cryptographic timestamps that prove genuine student effort and learning. Each assignment, project, and portfolio piece is anchored with C2PA manifests that specify creation tools, time investment, collaboration levels, and AI assistance disclosure, creating transparent academic integrity standards. Educational institutions can deploy arcHIVE as a standardized verification system across all departments, automatically distinguishing between authentic student work and AI-generated content while maintaining academic honesty policies fairly and consistently. The blockchain-anchored transcripts and portfolios create portable, tamper-proof learning records that transfer between institutions and persist throughout career changes, giving students permanent ownership of their authentic academic achievements. Employers and graduate programs can instantly verify the authenticity of student work samples, research projects, and creative portfolios, restoring confidence in academic credentials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Law Section */}
        <Section id="law" className="bg-white">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Gavel className="h-12 w-12 text-gray-600" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Legal & Law Enforcement</h2>
              <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertTriangle className="mr-3 h-5 w-5" />
                    The Problem: Digital Evidence Under Attack
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Legal systems worldwide face a crisis as defense attorneys successfully challenge digital evidence by claiming sophisticated manipulation or deepfake technology, even when footage is authentic, creating reasonable doubt that undermines justice. Body camera footage, surveillance videos, and mobile phone recordings lack tamper-evident chain of custody documentation, making it difficult to prove evidence integrity from capture to courtroom presentation. Law enforcement agencies struggle with evidence management systems that don't provide cryptographic proof of authenticity, allowing opposing counsel to question whether footage has been edited, enhanced, or replaced during storage and processing. The technical complexity of verifying digital media authenticity requires expensive forensic experts whose analysis can be challenged by equally qualified experts presenting contradictory conclusions. Courts lack standardized protocols for evaluating digital evidence authenticity, leading to inconsistent rulings and appeals based on technical disputes rather than facts. International legal cases involving cross-border evidence face additional challenges when different jurisdictions have varying standards for digital evidence admissibility and verification requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    The arcHIVE Solution: Bulletproof Chain of Custody
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE establishes an unbreakable chain of digital evidence custody by cryptographically sealing media at the moment of capture with blockchain-anchored timestamps and device signatures that cannot be forged or disputed in court. Law enforcement agencies and legal professionals can deploy arcHIVE-enabled recording devices that automatically generate C2PA manifests containing officer ID, GPS coordinates, device serial numbers, and network conditions, creating legally admissible evidence that meets the highest evidentiary standards. Every access, transfer, or modification of evidence files is logged in an immutable audit trail on the blockchain, providing courts with complete transparency about evidence handling and eliminating questions about tampering or chain of custody breaks. The system generates automated evidence reports with cryptographic proofs that can be verified by any party in legal proceedings, reducing expensive expert witness fees and streamlining evidence admissibility hearings. International courts can accept arcHIVE-verified evidence with confidence, knowing that the blockchain anchoring provides universal verification standards that transcend jurisdictional differences. Defense attorneys and prosecutors gain equal access to verification tools, creating a level playing field where authentic evidence is quickly accepted and fabricated evidence is immediately exposed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Investors Section */}
        <Section id="investors" className="bg-gradient-to-br from-primary/10 via-white to-secondary/10">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Investment Opportunity</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                Position yourself at the forefront of the digital authenticity revolution with arcHIVE—the infrastructure layer for trusted media in an AI-saturated world.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Market Opportunity</h3>
                <div className="space-y-6">
                  <Card className="border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">Digital Identity & Trust</h4>
                        <span className="text-2xl font-bold text-primary">$15.8B</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Global market size by 2025, growing at 13.9% CAGR</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">Content Authentication</h4>
                        <span className="text-2xl font-bold text-primary">$2.8B</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Addressable market segment, virtually unserved</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">AI Detection Services</h4>
                        <span className="text-2xl font-bold text-primary">$540M</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Current market for post-creation detection tools</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Competitive Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">First-Mover Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">Only production-ready C2PA + blockchain solution</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Network className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Network Effects</h4>
                      <p className="text-sm text-muted-foreground">Value increases with each verified creator and validator</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Settings className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Technical Moat</h4>
                      <p className="text-sm text-muted-foreground">Deep integration of C2PA, IPFS, and blockchain technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Enterprise Partnerships</h4>
                      <p className="text-sm text-muted-foreground">Direct integration opportunities across multiple industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="text-primary mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Global Regulatory Alignment</h4>
                      <p className="text-sm text-muted-foreground">Built on emerging international standards (C2PA, W3C DID)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-gray-100 shadow-xl">
              <CardContent className="p-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Lead the Authenticity Revolution?</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join us in building the infrastructure that will restore trust in digital media and enable authentic human creativity to thrive in an AI-dominated landscape.
                  </p>
                  <div className="flex flex-col items-center space-y-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 shadow-lg"
                        onClick={() => window.location.href = 'mailto:thearchivemint@mail.com?subject=Investment Inquiry - arcHIVE'}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact for Investment Details
                      </Button>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        thearchivemint@mail.com
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 w-full">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          Stay updated on our progress and investment opportunities
                        </p>
                        <SignupForm 
                          trigger={
                            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                              Get Investment Updates
                            </Button>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* News Callout 4 */}
        <div className="ml-80 py-12 bg-gradient-to-r from-gray-50 to-slate-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">Legal Precedent</div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "Biden Deepfake Robocall Tells New Hampshire Voters to Stay Home"
              </blockquote>
              <cite className="text-sm text-gray-600">
                — FCC Investigation, New Hampshire Primary 2024
              </cite>
            </div>
          </div>
        </div>

        {/* The Future Section */}
        <Section id="future" className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-12 w-12 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">The Future: Taking Control Back</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-accent bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
                    <AlertCircle className="mr-3 h-5 w-5" />
                    The Problem: Corporate Oversight Vacuum
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The current AI landscape operates with minimal oversight, allowing companies like OpenAI, Midjourney, and Stable Diffusion to scrape billions of copyrighted works without consent or compensation, fundamentally restructuring entire industries without accountability. These companies have trained trillion-parameter models on decades of human creativity, then monetized that collective knowledge through pay-per-use APIs while creators receive nothing for their contributions. The absence of regulatory frameworks means AI companies can continuously update their models with new copyrighted content, creating competitive advantages built on unauthorized intellectual property. As Hany Farid, a digital forensic specialist, noted: "The big generative AI companies can watermark and fingerprint every single piece of content that they create... We should just tell people what this information is."
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <blockquote className="text-lg italic text-gray-800 mb-3">
                      "AI cannot replicate the depth of my life journey, yet those who control it hold the power to mimic the likeness of my art, to replicate it and falsely claim my identity and intellectual property."
                    </blockquote>
                    <cite className="text-sm font-medium text-red-600">— FKA Twigs, Senate Testimony on AI and Creative Rights</cite>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <ShieldCheck className="mr-3 h-5 w-5" />
                    arcHIVE's Solution: Preemptive Protection Against Aggregation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    arcHIVE creates an impenetrable defense against unauthorized AI training by embedding cryptographic usage restrictions directly into media files at the moment of creation, making it legally and technically impossible for AI companies to aggregate protected content. When creators use arcHIVE-enabled tools, their work is immediately wrapped in C2PA manifests that specify exact licensing terms, AI training restrictions, and usage permissions that persist wherever the content travels online. The blockchain-anchored ownership records create legally enforceable digital rights management that automatically blocks scraping attempts and provides creators with evidence for copyright lawsuits against violating AI companies. Unlike traditional copyright protection that requires reactive legal action after theft has occurred, arcHIVE prevents unauthorized use proactively by making protected content technically incompatible with training pipelines.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-success">
                    <blockquote className="text-lg italic text-gray-800 mb-3">
                      "It's really about how can we deliver on the promise of AI, which is around creativity, innovation, and productivity, but at the same time mitigate the risks that it presents typically around bias, unethical approaches and misuse."
                    </blockquote>
                    <cite className="text-sm font-medium text-green-600">— Chandra Sinnathamby, Adobe, on Restoring Trust in AI</cite>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Eye className="mr-3 h-5 w-5 text-orange-600" />
                    The Path Forward: Creator Empowerment Through Technology
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Immediate Impact</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Automatic protection against AI scraping and training
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Legal evidence for copyright enforcement actions
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Platform-independent content verification
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Long-term Vision</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Industry-standard creator compensation systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Transparent AI training consent mechanisms
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          Global authenticity verification infrastructure
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* News Callout 5 */}
        <div className="ml-80 py-12 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center">
              <div className="text-sm font-medium text-emerald-600 mb-2">Technology Solution</div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "Meta Will Crack Down on AI‑Generated Fakes—but Leave Plenty Undetected"
              </blockquote>
              <cite className="text-sm text-gray-600">
                — TechCrunch analysis of Meta's watermarking gaps, 2024
              </cite>
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <Section id="investors" className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Investment Opportunity</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Building className="mr-3 h-5 w-5" />
                    Market Opportunity: $40 Billion Problem by 2027
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The global media authenticity crisis represents a massive market opportunity, with generative AI fraud losses projected to reach $40 billion annually by 2027, growing at 32% per year from today's $12.3 billion. Insurance companies alone face over $308 billion in annual fraud losses, with 1,300% surge in deepfake attempts creating urgent demand for verification solutions. The digital art and creative industries are experiencing unprecedented disruption as AI-generated content undermines artist livelihoods and intellectual property rights, creating a $200+ billion market seeking authenticity solutions. Legal systems worldwide struggle with $50+ billion in costs related to digital evidence verification and court disputes over media authenticity. Educational institutions managing student portfolios and academic integrity represent a $1.7 trillion global market requiring authentic content verification. Corporate communications and brand protection face escalating threats as deepfake technology becomes accessible, with businesses averaging $500,000 losses per incident and desperately seeking preventive solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-success bg-success/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-success mb-4 flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    arcHIVE's Competitive Advantage: First-Mover Technology Leadership
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    arcHIVE delivers the only comprehensive solution combining C2PA industry standards, blockchain anchoring, and IPFS storage into a seamless verification ecosystem that scales across all industries and use cases. Our technology stack leverages established protocols while creating proprietary innovations in device-level signing, real-time verification, and cross-platform compatibility that competitors cannot easily replicate. The platform addresses multiple revenue streams simultaneously - from licensing verification APIs to enterprise solutions to consumer applications - creating diverse monetization opportunities with built-in network effects. Our early partnerships with content creators, institutions, and technology companies position arcHIVE as the standard-setting platform before competitors can establish market presence. The blockchain-anchored verification creates permanent competitive moats as users build irreplaceable authenticity records that lock in long-term platform value. With deepfake detection arms race favoring generation over detection, arcHIVE's prevention-first approach provides sustainable technological advantage that strengthens rather than weakens over time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Invest in the Future of Media Authenticity?</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-2">
                      <Globe className="h-10 w-10 text-primary mx-auto" />
                      <div className="text-lg font-semibold text-foreground">Global Scale</div>
                      <p className="text-sm text-muted-foreground">Multi-billion dollar addressable market across all industries</p>
                    </div>
                    <div className="space-y-2">
                      <Settings className="h-10 w-10 text-secondary mx-auto" />
                      <div className="text-lg font-semibold text-foreground">Proven Technology</div>
                      <p className="text-sm text-muted-foreground">Built on established C2PA, blockchain, and IPFS standards</p>
                    </div>
                    <div className="space-y-2">
                      <Users className="h-10 w-10 text-success mx-auto" />
                      <div className="text-lg font-semibold text-foreground">Network Effects</div>
                      <p className="text-sm text-muted-foreground">Platform value increases with every verified piece of content</p>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                    onClick={() => window.location.href = 'mailto:thearchivemint@mail.com?subject=Investment Inquiry - arcHIVE Media Authenticity Platform'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact for Investment Opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

      </main>
    </div>
  );
}
