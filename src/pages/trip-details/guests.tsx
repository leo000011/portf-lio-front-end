import { CircleDashed, UserCog } from "lucide-react";
import Button from "../../components/button";

const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Jéssica de Oliveira
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica432@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Jéssica de Oliveira
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica432@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>

        <Button
          variant="secondary"
          size="full"
          onClick={() => alert("Oi, Leandro!")}
        >
          <UserCog className="size-5" />
          Gerenciar Convidados
        </Button>
      </div>
    </div>
  );
};

export default Guests;
