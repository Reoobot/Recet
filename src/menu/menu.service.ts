import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create.menu.dto';
import { UpdateMenuDto } from './dto/update.menu.dto';
import { Menu } from './entities/entities';

interface Params {
    sort?:string;
    limit?:string;
}

@Injectable()
export class MenusService {
    constructor(
        @InjectRepository(Menu) private menuRepository:Repository<Menu>,
    ){}

    findAll(params?:Params):Promise<Menu[]>{
        return this.menuRepository.find()
    }

    findMenu(menuId:string): Promise<Menu>{
        return this.menuRepository.findOne({where:{id: parseInt (menuId)}})
    }

    createMenu(newMenu:CreateMenuDto): Promise<Menu> {
        return this.menuRepository.save(newMenu [1]);
    }

    deleteMenu(menuId:string){
        return this.menuRepository.delete({id:parseInt(menuId)})
    }

async updateMenu(menuId:string, newMenu:UpdateMenuDto){
    try{
        const menu = await this.findMenu(menuId);
        if (menu !=null){
            const updateMenu = Object.assign(menu, newMenu)
            return this.menuRepository.save(updateMenu);
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log(error)
    }
}



}
