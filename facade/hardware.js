const CPU = {
    Freeze = () => {},
    Jump = (position) => {},
    Execute = () => {},
};

const HDD = { Read = (lba, size) => (lba + size).toString() };
const Memory = { Load = (pos, data) => {} };

const computerFacade = {Start = () => {
    CPU.Freeze();
    Memory.Load(address, HDD.Read(kbootSector, ksectorSize));
    CPU.Jump(address);
    CPU.Execute();
    const _cpu = CPU;
    const _memory = Memory;
    const _hdd = HDD;
} };

function main() {
    computerFacade.Start();
}
