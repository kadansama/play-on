import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DateFilter } from "../ui";
import { DATE_INFO } from "../lib/config";

describe("DateFilter", () => {
    it("DateFilter при рендере отображает список", () => {
        const mock = vi.fn()
        render(<DateFilter onChange={mock} />);

        DATE_INFO.forEach(d => {
            expect(screen.getByText(d.date)).toBeInTheDocument();
        });
    })
    it("DateFilter при выборе знаечния '2015' выводит '2015'", () => {
        const mock = vi.fn()
        render(<DateFilter onChange={mock} />)
        const option = screen.getByText("2015")
        expect(option).toHaveTextContent("2015")
    })
    it("DateFilter при выборе 'Released' вызывает onChange с {yearFrom:1000, yearTo:3000}", () => {
        const mock = vi.fn()
        render(<DateFilter onChange={mock} />)
        const option = screen.getByText("Released")
        const select = option.closest("select");
        fireEvent.change(select, { target: { value: option.getAttribute("value") } });
        expect(mock).toHaveBeenCalledWith({yearFrom: 1000, yearTo: 3000});
    })
    it ("Datefilter при выборе значения '2000-2010' вызывает onChange с {yearFrom: 2000, yearTo: 2010}", ()=>{
        const mock = vi.fn()
        render(<DateFilter onChange={mock}></DateFilter>)
        const option = screen.getByText("2000-2010")
        const select = option.closest("select");
        fireEvent.change(select, { target: { value: option.getAttribute("value") } });
        expect(mock).toHaveBeenCalledWith({yearFrom: 2000, yearTo: 2010});
    })
    it ("Datefilter при выборе значения 'Before the 1950s' вызывает onChange с {yearFrom: 1000, yearTo: 1950}", ()=>{
        const mock = vi.fn()
        render(<DateFilter onChange={mock}></DateFilter>)
        const option = screen.getByText("Before the 1950s")
        const select = option.closest("select");
        fireEvent.change(select, { target: { value: option.getAttribute("value") } });
        expect(mock).toHaveBeenCalledWith({yearFrom: 1000, yearTo: 1950});
    })
})