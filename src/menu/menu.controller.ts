import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateMenuDto } from './dto/create.menu.dto';
import { UpdateMenuDto } from './dto/update.menu.dto';
import { MenusService } from './menu.service';



@Controller('menu')
export class MenusController {
    constructor(private readonly menusService:MenusService){}

    // ----------PARA OTENER TODO LOS MENU -------// 

    @Get()
    findAll(@Query() param?:any){
        return this.menusService.findAll()
    }
    // ----------PARA OTENER UN SOLO MENU -------// 

    @Get(':menuId')
    findMenu(@Param('menuId') menuId:string){
        return this.menusService.findMenu(menuId);
    }

    @Post()
    createMenu(@Body() newMenu:CreateMenuDto){
        return this.menusService.createMenu(newMenu)
    }

    @Delete('menuId')
    deleteMenu(@Param('menuId') menuId:string){
        return this.menusService.deleteMenu(menuId)
    }

    @Put('menuId')
    updateMenu(@Body() newMenu:UpdateMenuDto, @Param('menuId') menuId:string){
        return this.menusService.updateMenu(menuId, newMenu);
    }


    
  
}
