import { SectionTitle } from "@/components/modules/SectionTitle";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/ui/FileUploader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BiPaperPlane } from "react-icons/bi";

const Message: React.FC = () => {
  return (
    <>
      <SectionTitle
        title="Email"
        description="If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
        icon={<BiPaperPlane />}
      />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mb-20">
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <div className="col-span-2">
          <Textarea placeholder="Type your message here." rows={5} />
        </div>
        <div className="col-span-2">
          {/* Kalau bisa pake yang FileUploader king, kalau sulit ganti pake input file biasa gpp */}

          {/* <Input type="file" placeholder="Attachments" /> */}

          <FileUploader
            maxFileCount={4}
            maxSize={4 * 1024 * 1024}
            multiple
            // progresses={progresses}
            // onUpload={onUpload}
            // disabled={isUploading}
          />
          
        </div>
        <div>
          <Button variant={"default"}>Send Message</Button>
        </div>
      </div>
    </>
  );
};

export default Message;